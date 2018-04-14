# -*- coding: utf-8 -*- {{{
# vim: set fenc=utf-8 ft=python sw=4 ts=4 sts=4 et:
#
# Copyright 2017, Battelle Memorial Institute.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
# This material was prepared as an account of work sponsored by an agency of
# the United States Government. Neither the United States Government nor the
# United States Department of Energy, nor Battelle, nor any of their
# employees, nor any jurisdiction or organization that has cooperated in the
# development of these materials, makes any warranty, express or
# implied, or assumes any legal liability or responsibility for the accuracy,
# completeness, or usefulness or any information, apparatus, product,
# software, or process disclosed, or represents that its use would not infringe
# privately owned rights. Reference herein to any specific commercial product,
# process, or service by trade name, trademark, manufacturer, or otherwise
# does not necessarily constitute or imply its endorsement, recommendation, or
# favoring by the United States Government or any agency thereof, or
# Battelle Memorial Institute. The views and opinions of authors expressed
# herein do not necessarily state or reflect those of the
# United States Government or any agency thereof.
#
# PACIFIC NORTHWEST NATIONAL LABORATORY operated by
# BATTELLE for the UNITED STATES DEPARTMENT OF ENERGY
# under Contract DE-AC05-76RL01830
# }}}

import logging
import sys
import datetime

from volttron.platform.vip.agent import Agent, Core, RPC
from volttron.platform.async import AsyncCall
from volttron.platform.agent import utils
from volttron.platform.messaging import topics, headers

utils.setup_logging()
_log = logging.getLogger(__name__)

bacnet_logger = logging.getLogger("haystack_driver")
bacnet_logger.setLevel(logging.WARNING)
__version__ = '0.1'

import os.path
import errno
from volttron.platform.agent import json as jsonapi
from collections import defaultdict

from Queue import Queue, Empty

import threading

from gevent.event import AsyncResult

path = os.path.dirname(os.path.abspath(__file__))
configFile = os.path.join(path, "haystack_example_config.csv")


def haystack_driver_agent(config_path, **kwargs):
    config = utils.load_config(config_path)

    device_address = config["device_address"]
    obj_name = config.get("object_name", "Volttron Haystack Driver")
    max_per_request = config.get("default_max_per_request", 1000000)

    return HaystackDriverAgent(device_address,
                            obj_name,
                            max_per_request,
                            heartbeat_autostart=True,
                            **kwargs)


class HaystackDriverAgent(Agent):
    '''This agent creates a virtual bacnet device that is used by
    the bacnet driver interface to communicate with devices.
    '''
    def __init__(self, device_address,
                 obj_name, max_per_request,
                 **kwargs):
        super(HaystackDriverAgent, self).__init__(**kwargs)

    def _cast_value(self, value, datatype):
            if datatype is Integer:
                value = int(value)
            elif datatype is Real:
                value = float(value)
            elif datatype is Unsigned:
                value = int(value)
            return datatype(value)

    @RPC.export
    def write_property(self, target_address, value, object_type,
                       instance_number, property_name, priority=None,
                       index=None):
        """Write to a property."""

        _log.debug(write_debug_str.format(target=target_address,
                                          type=object_type,
                                          instance=instance_number,
                                          property=property_name,
                                          priority=priority,
                                          index=index,
                                          value=value))

        request = WritePropertyRequest(
            objectIdentifier=(object_type, instance_number),
            propertyIdentifier=property_name)

        datatype = get_datatype(object_type, property_name)
        if (value is None or value == 'null'):
            bac_value = Null()
        elif issubclass(datatype, Atomic):
            bac_value = self._cast_value(value, datatype)
        elif issubclass(datatype, Array) and (index is not None):
            if index == 0:
                bac_value = Integer(value)
            elif issubclass(datatype.subtype, Atomic):
                bac_value = datatype.subtype(value)
            elif not isinstance(value, datatype.subtype):
                raise TypeError("invalid result datatype, expecting {}".format(
                    datatype.subtype.__name__,))
        elif not isinstance(value, datatype):
            raise TypeError("invalid result datatype, expecting %s".format(
                datatype.__name__,))

        request.propertyValue = Any()
        request.propertyValue.cast_in(bac_value)

        request.pduDestination = Address(target_address)

        # Optional index
        if index is not None:
            request.propertyArrayIndex = index

        # Optional priority
        if priority is not None:
            request.priority = priority

        iocb = self.iocb_class(request)
        self.this_application.submit_request(iocb)
        result = iocb.ioResult.get(10)
        if isinstance(result, SimpleAckPDU):
            return value
        raise RuntimeError("Failed to set value: " + str(result))

    def read_using_single_request(self, target_address, point_map):
        results = {}

        for point, properties in point_map.iteritems():
            if len(properties) == 3:
                object_type, instance_number, property_name = properties
                property_index = None
            elif len(properties) == 4:
                (object_type, instance_number, property_name,
                 property_index) = properties
            else:
                _log.error(("skipping {} in request to {}: incorrect number of"
                           " parameters").format(point, target_address))
                continue

            try:
                results[point] = self.read_property(
                    target_address, object_type,
                    instance_number, property_name, property_index)
            except Exception as e:
                _log.error("Error reading point {} from {}: {}".format(
                    point, target_address, e))

        return results

    @RPC.export
    def read_property(self, target_address, object_type, instance_number,
                      property_name, property_index=None):
        request = ReadPropertyRequest(
            objectIdentifier=(object_type, instance_number),
            propertyIdentifier=property_name,
            propertyArrayIndex=property_index)
        request.pduDestination = Address(target_address)
        iocb = self.iocb_class(request)
        self.this_application.submit_request(iocb)
        bacnet_results = iocb.ioResult.get(10)
        return bacnet_results

    def _get_access_spec(self, obj_data, properties):
        count = 0
        obj_type, obj_inst = obj_data
        prop_ref_list = []
        for prop, prop_index in properties:
            prop_ref = PropertyReference(propertyIdentifier=prop)
            if prop_index is not None:
                prop_ref.propertyArrayIndex = prop_index
            prop_ref_list.append(prop_ref)
            count += 1
        return (ReadAccessSpecification(
            objectIdentifier=(obj_type, obj_inst),
            listOfPropertyReferences=prop_ref_list), count)

    def _get_object_properties(self, point_map, target_address):
        # This will be used to get the results mapped
        # back on the the names
        reverse_point_map = {}

        # Used to group properties together for the request.
        object_property_map = defaultdict(list)

        for name, properties in point_map.iteritems():
            if len(properties) == 3:
                (object_type, instance_number,
                 property_name) = properties
                property_index = None
            elif len(properties) == 4:
                (object_type, instance_number, property_name,
                 property_index) = properties
            else:
                _log.error("skipping {} in request to {}: incorrect number of "
                           "parameters".format(name, target_address))
                continue
            object_property_map[object_type, instance_number].append(
                (property_name, property_index))

            reverse_point_map[object_type, instance_number, property_name,
                              property_index] = name

        return (object_property_map, reverse_point_map)

    @RPC.export
    def read_properties(self, target_address, point_map, max_per_request=None,
                        use_read_multiple=True):
        """Read a set of points and return the results"""

        if not use_read_multiple:
            return self.read_using_single_request(target_address, point_map)

        # Set max_per_request really high if not set.
        if max_per_request is None:
            max_per_request = self._max_per_request

        _log.debug("Reading {count} points on {target}, max per"
                   " scrape: {max}".format(count=len(point_map),
                                           target=target_address,
                                           max=max_per_request))
        # process point map and populate object_property_map and
        # reverse_point_map
        (object_property_map, reverse_point_map) = self._get_object_properties(
            point_map, target_address)

        result_dict = {}
        finished = False

        while not finished:
            read_access_spec_list = []
            count = 0
            for _ in xrange(max_per_request):
                try:
                    obj_data, properties = object_property_map.popitem()
                except KeyError:
                    finished = True
                    break
                (spec_list, spec_count) = self._get_access_spec(
                    obj_data, properties)
                count += spec_count
                read_access_spec_list.append(spec_list)

            if read_access_spec_list:
                _log.debug(("Requesting {count} properties from "
                           "{target}").format(count=count,
                                              target=target_address))
                request = ReadPropertyMultipleRequest(
                    listOfReadAccessSpecs=read_access_spec_list)
                request.pduDestination = Address(target_address)

                iocb = self.iocb_class(request)
                self.this_application.submit_request(iocb)
                bacnet_results = iocb.ioResult.get(10)

                _log.debug(("Received read response from {target} count: "
                            "{count}").format(count=count,
                                              target=target_address))

                for prop_tuple, value in bacnet_results.iteritems():
                    if str(value).lower() in self._float_values_to_cast_to_string:
                        value = str(value)
                    name = reverse_point_map[prop_tuple]
                    result_dict[name] = value

        return result_dict


def main(argv=sys.argv):
    '''Main method called to start the agent.'''
    utils.vip_main(haystack_driver_agent, identity="platform.haystack_driver",
                   version=__version__)


if __name__ == '__main__':
    # Entry point for script
    try:
        sys.exit(main())
    except KeyboardInterrupt:
        pass
