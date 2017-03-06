import argparse
import logging
import gevent

from volttron.platform import get_address, get_home
from volttron.platform.messaging import topics
from volttron.platform.keystore import KeyStore
from volttron.platform.vip.agent import Agent, PubSub
from volttron.platform.vip.agent import errors

_log = logging.getLogger(__name__)


class BACnetInteraction(Agent):
    def __init__(self, proxy_id, *args, **kwargs):
        super(BACnetInteraction, self).__init__(*args, **kwargs)
        self.proxy_id = proxy_id
        self._devices = []

    def send_iam(self, low_device_id=None, high_device_id=None, address=None):
        self.vip.rpc.call(self.proxy_id, "who_is",
                          low_device_id=low_device_id,
                          high_device_id=high_device_id,
                          target_address=address).get(timeout=5.0)

    @PubSub.subscribe('pubsub', topics.BACNET_I_AM)
    def iam_handler(self, peer, sender, bus,  topic, headers, message):
        self._devices.append(message)


def main():
    # parse the command line arguments
    arg_parser = argparse.ArgumentParser(description=__doc__)

    arg_parser.add_argument("--address",
                            help="Target only device(s) at <address> for request")

    arg_parser.add_argument("--out-path",
                            help="Optional output file for configuration",
                            )

    arg_parser.add_argument("--range", type=int, nargs=2,
                            metavar=('LOW', 'HIGH'),
                            help=("Lower and upper limit on device ID "
                                  "in results"))

    arg_parser.add_argument("--timeout", type=int, metavar=('SECONDS'),
                            help="Time, in seconds, to wait for responses. Default: %(default)s",
                            default=5)

    arg_parser.add_argument("--proxy-id",
                            help="VIP IDENTITY of the BACnet proxy agent.",
                            default="platform.bacnet_proxy")

    args = arg_parser.parse_args()

    keystore = KeyStore()
    agent = BACnetInteraction(args.proxy_id,
                              address=get_address(),
                              volttron_home=get_home(),
                              publickey=keystore.public,
                              secretkey=keystore.secret,
                              enable_store=False)

    kwargs = {'address': args.address}

    event = gevent.event.Event()
    gevent.spawn(agent.core.run, event)
    event.wait()

    _log.debug("initialization")
    _log.debug("    - args: %r", args)

    try:
        agent.send_iam(**kwargs)
        print(agent._messages)

    except errors.Unreachable:
        _log.error(("There is no BACnet proxy Agent running on the platform "
                    "with the VIP IDENTITY {}").format(args.proxy_id))

if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        _log.exception("an error has occurred: %s", e)
    finally:
        _log.debug("finally")
