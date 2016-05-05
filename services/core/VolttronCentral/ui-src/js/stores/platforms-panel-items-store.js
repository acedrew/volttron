'use strict';

var ACTION_TYPES = require('../constants/action-types');
var dispatcher = require('../dispatcher');
var Store = require('../lib/store');

var _pointsOrder = 0;
var _devicesOrder = 1;
var _buildingsOrder = 2;
var _agentsOrder = 3;

var _items = {
    "platforms": {}
};

var _items2 = {
    "platforms": {

        "4687fedc-65ba-43fe-21dc-098765bafedc": {
            "uuid": "4687fedc-65ba-43fe-21dc-098765bafedc",
            "name": "PNNL",
            "expanded": null,
            "visible": true,
            "status": "GOOD",
            "type": "platform",
            "sortOrder": 0,
            "children": ["agents", "buildings", "points"],
            "path": ["platforms", "4687fedc-65ba-43fe-21dc-098765bafedc"],
            "points": {
                "path": ["platforms", "4687fedc-65ba-43fe-21dc-098765bafedc", "points"],
                "name": "Points",
                "expanded": null,
                "visible": true,
                "status": "GOOD",
                "type": "type",
                "sortOrder": _pointsOrder,
                "children": ["5461fedc-65ba-43fe-21dc-000765bafedl"],                    
                "5461fedc-65ba-43fe-21dc-000765bafedl":
                {
                    "uuid": "5461fedc-65ba-43fe-21dc-000765bafedl",
                    "name": "OutdoorAirTemperature",
                    "expanded": null,
                    "visible": true,
                    "status": "GOOD",
                    "type": "point",
                    "sortOrder": 0,
                    "children": [],
                    "path": ["platforms", "4687fedc-65ba-43fe-21dc-098765bafedc", "points", "5461fedc-65ba-43fe-21dc-000765bafedl"],
                    "data": [
                                {
                                    "uuid": "5461fedc-65ba-43fe-21dc-000765bafedl",
                                    "name": "OutdoorAirTemperature",
                                    "parent": "PNNL",
                                    "month": 1,
                                    "avg_max_temp_f": 46.83,
                                    "avg_min_temp_f": 28.1,
                                    "avg_temp_f": 37.47,
                                    "total_percipitation_in": 2.35,
                                    "total_snowfall_in": 9.6
                                },
                                {
                                    "uuid": "5461fedc-65ba-43fe-21dc-000765bafedl",
                                    "name": "OutdoorAirTemperature",
                                    "parent": "PNNL",
                                    "month": 2,
                                    "avg_max_temp_f": 47.58,
                                    "avg_min_temp_f": 26.35,
                                    "avg_temp_f": 36.96,
                                    "total_percipitation_in": 7.61,
                                    "total_snowfall_in": 25.5
                                },
                                {
                                    "uuid": "5461fedc-65ba-43fe-21dc-000765bafedl",
                                    "name": "OutdoorAirTemperature",
                                    "parent": "PNNL",
                                    "month": 3,
                                    "avg_max_temp_f": 51.45,
                                    "avg_min_temp_f": 31.39,
                                    "avg_temp_f": 41.42,
                                    "total_percipitation_in": 11.74,
                                    "total_snowfall_in": 39.6
                                },
                                {
                                    "uuid": "5461fedc-65ba-43fe-21dc-000765bafedl",
                                    "name": "OutdoorAirTemperature",
                                    "parent": "PNNL",
                                    "month": 4,
                                    "avg_max_temp_f": 61.5,
                                    "avg_min_temp_f": 35.13,
                                    "avg_temp_f": 48.32,
                                    "total_percipitation_in": 1.44,
                                    "total_snowfall_in": 2.3
                                },
                                {
                                    "uuid": "5461fedc-65ba-43fe-21dc-000765bafedl",
                                    "name": "OutdoorAirTemperature",
                                    "parent": "PNNL",
                                    "month": 5,
                                    "avg_max_temp_f": 64.9,
                                    "avg_min_temp_f": 40.68,
                                    "avg_temp_f": 52.79,
                                    "total_percipitation_in": 2.17,
                                    "total_snowfall_in": 0
                                },
                                {
                                    "uuid": "5461fedc-65ba-43fe-21dc-000765bafedl",
                                    "name": "OutdoorAirTemperature",
                                    "parent": "PNNL",
                                    "month": 6,
                                    "avg_max_temp_f": 73.79,
                                    "avg_min_temp_f": 48.18,
                                    "avg_temp_f": 60.98,
                                    "total_percipitation_in": 2.06,
                                    "total_snowfall_in": 0
                                },
                                {
                                    "uuid": "5461fedc-65ba-43fe-21dc-000765bafedl",
                                    "name": "OutdoorAirTemperature",
                                    "parent": "PNNL",
                                    "month": 7,
                                    "avg_max_temp_f": 85.07,
                                    "avg_min_temp_f": 56.1,
                                    "avg_temp_f": 70.58,
                                    "total_percipitation_in": 0,
                                    "total_snowfall_in": 0
                                },
                                {
                                    "uuid": "5461fedc-65ba-43fe-21dc-000765bafedl",
                                    "name": "OutdoorAirTemperature",
                                    "parent": "PNNL",
                                    "month": 8,
                                    "avg_max_temp_f": 88.1,
                                    "avg_min_temp_f": 56.45,
                                    "avg_temp_f": 72.28,
                                    "total_percipitation_in": 0.15,
                                    "total_snowfall_in": 0
                                },
                                {
                                    "uuid": "5461fedc-65ba-43fe-21dc-000765bafedl",
                                    "name": "OutdoorAirTemperature",
                                    "parent": "PNNL",
                                    "month": 9,
                                    "avg_max_temp_f": 84.47,
                                    "avg_min_temp_f": 54.13,
                                    "avg_temp_f": 69.3,
                                    "total_percipitation_in": 3.42,
                                    "total_snowfall_in": 0
                                },
                                {
                                    "uuid": "5461fedc-65ba-43fe-21dc-000765bafedl",
                                    "name": "OutdoorAirTemperature",
                                    "parent": "PNNL",
                                    "month": 10,
                                    "avg_max_temp_f": 71.14,
                                    "avg_min_temp_f": 43.54,
                                    "avg_temp_f": 57.34,
                                    "total_percipitation_in": 2.8,
                                    "total_snowfall_in": 0
                                },
                                {
                                    "uuid": "5461fedc-65ba-43fe-21dc-000765bafedl",
                                    "name": "OutdoorAirTemperature",
                                    "parent": "PNNL",
                                    "month": 11,
                                    "avg_max_temp_f": 53.62,
                                    "avg_min_temp_f": 32.07,
                                    "avg_temp_f": 42.62,
                                    "total_percipitation_in": 1.07,
                                    "total_snowfall_in": 5
                                },
                                {
                                    "uuid": "5461fedc-65ba-43fe-21dc-000765bafedl",
                                    "name": "OutdoorAirTemperature",
                                    "parent": "PNNL",
                                    "month": 12,
                                    "avg_max_temp_f": 48.97,
                                    "avg_min_temp_f": 25.42,
                                    "avg_temp_f": 37.19,
                                    "total_percipitation_in": 0,
                                    "total_snowfall_in": 0
                                }
                            ]
                }
            },
            "agents": {                
                "path": ["platforms", "4687fedc-65ba-43fe-21dc-098765bafedc", "agents"],
                "name": "Agents",
                "expanded": null,
                "visible": true,
                "status": "GOOD",
                "type": "type",
                "sortOrder": _agentsOrder,
                "children": ["2461fedc-65ba-43fe-21dc-098765bafede", "7897fedc-65ba-43fe-21dc-098765bafedf"], 
                "2461fedc-65ba-43fe-21dc-098765bafede":
                {
                    "uuid": "2461fedc-65ba-43fe-21dc-098765bafede",
                    "name": "Platform Agent",
                    "expanded": null,
                    "visible": true,
                    "status": "GOOD",
                    "type": "agent",
                    "sortOrder": 0,
                    "children": [],
                    "path": ["platforms", "4687fedc-65ba-43fe-21dc-098765bafedc", "agents", "2461fedc-65ba-43fe-21dc-098765bafede"]
                },
                "7897fedc-65ba-43fe-21dc-098765bafedf":
                {
                    "uuid": "7897fedc-65ba-43fe-21dc-098765bafedf",
                    "name": "SqlHistorian",
                    "expanded": null,
                    "visible": true,
                    "status": "GOOD",
                    "type": "agent",
                    "sortOrder": 0,
                    "children": [],
                    "path": ["platforms", "4687fedc-65ba-43fe-21dc-098765bafedc", "agents", "7897fedc-65ba-43fe-21dc-098765bafedf"]
                }
            },
            "buildings": {             
                "path": ["platforms", "4687fedc-65ba-43fe-21dc-098765bafedc", "buildings"],
                "name": "Buildings",
                "expanded": null,
                "visible": true,
                "status": "GOOD",
                "type": "type",
                "sortOrder": _buildingsOrder,
                "children": ["1111fedc-65ba-43fe-21dc-098765bafede"],
                "1111fedc-65ba-43fe-21dc-098765bafede":
                {
                    "uuid": "1111fedc-65ba-43fe-21dc-098765bafede",
                    "name": "ISB1",
                    "expanded": null,
                    "visible": true,
                    "status": "GOOD",
                    "type": "building",
                    "sortOrder": 0,
                    "children": ["devices", "points"],
                    "path": ["platforms", "4687fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1111fedc-65ba-43fe-21dc-098765bafede"],
                    "points": {         
                        "path": ["platforms", "4687fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1111fedc-65ba-43fe-21dc-098765bafede", "points"],
                        "name": "Points",
                        "expanded": null,
                        "visible": true,
                        "status": "GOOD",
                        "type": "type",
                        "sortOrder": _pointsOrder,
                        "children": ["5461fedc-65ba-43fe-21dc-111765bafedl", "6451fedc-65ba-43fe-21dc-000765bafedl"], 
                        "5461fedc-65ba-43fe-21dc-111765bafedl":
                        {
                            "uuid": "5461fedc-65ba-43fe-21dc-111765bafedl",
                            "name": "OutdoorAirTemperature",
                            "expanded": null,
                            "visible": true,
                            "status": "GOOD",
                            "type": "point",
                            "sortOrder": 0,
                            "children": [],
                            "path": ["platforms", "4687fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1111fedc-65ba-43fe-21dc-098765bafede", "points", "5461fedc-65ba-43fe-21dc-111765bafedl"],
                            "parentPath": "PNNL > ISB1",
                            "parentType": "building",
                            "parentUuid": "1111fedc-65ba-43fe-21dc-098765bafede",
                            "data": [
                                {
                                    "uuid": "5461fedc-65ba-43fe-21dc-111765bafedl",
                                    "name": "OutdoorAirTemperature",
                                    "parent": "ISB1",
                                    "month": 1,
                                    "avg_max_temp_f": 44.25,
                                    "avg_min_temp_f": 23.25,
                                    "avg_temp_f": 33.75,
                                    "total_percipitation_in": 0.91,
                                    "total_snowfall_in": 2
                                },
                                {
                                    "uuid": "5461fedc-65ba-43fe-21dc-111765bafedl",
                                    "name": "OutdoorAirTemperature",
                                    "parent": "ISB1",
                                    "month": 2,
                                    "avg_max_temp_f": 53.14,
                                    "avg_min_temp_f": 27.9,
                                    "avg_temp_f": 40.52,
                                    "total_percipitation_in": 0.5,
                                    "total_snowfall_in": 1.1
                                },
                                {
                                    "uuid": "5461fedc-65ba-43fe-21dc-111765bafedl",
                                    "name": "OutdoorAirTemperature",
                                    "parent": "ISB1",
                                    "month": 3,
                                    "avg_max_temp_f": 61.18,
                                    "avg_min_temp_f": 36.18,
                                    "avg_temp_f": 48.68,
                                    "total_percipitation_in": 2.99,
                                    "total_snowfall_in": 0
                                },
                                {
                                    "uuid": "5461fedc-65ba-43fe-21dc-111765bafedl",
                                    "name": "OutdoorAirTemperature",
                                    "parent": "ISB1",
                                    "month": 4,
                                    "avg_max_temp_f": 67.76,
                                    "avg_min_temp_f": 41.24,
                                    "avg_temp_f": 54.5,
                                    "total_percipitation_in": 1.64,
                                    "total_snowfall_in": 0.5
                                },
                                {
                                    "uuid": "5461fedc-65ba-43fe-21dc-111765bafedl",
                                    "name": "OutdoorAirTemperature",
                                    "parent": "ISB1",
                                    "month": 5,
                                    "avg_max_temp_f": 73.55,
                                    "avg_min_temp_f": 47.86,
                                    "avg_temp_f": 60.7,
                                    "total_percipitation_in": 2.96,
                                    "total_snowfall_in": 0
                                },
                                {
                                    "uuid": "5461fedc-65ba-43fe-21dc-111765bafedl",
                                    "name": "OutdoorAirTemperature",
                                    "parent": "ISB1",
                                    "month": 6,
                                    "avg_max_temp_f": 84.77,
                                    "avg_min_temp_f": 55.1,
                                    "avg_temp_f": 69.93,
                                    "total_percipitation_in": 0.16,
                                    "total_snowfall_in": 0
                                },
                                {
                                    "uuid": "5461fedc-65ba-43fe-21dc-111765bafedl",
                                    "name": "OutdoorAirTemperature",
                                    "parent": "ISB1",
                                    "month": 7,
                                    "avg_max_temp_f": 93.69,
                                    "avg_min_temp_f": 61.81,
                                    "avg_temp_f": 77.75,
                                    "total_percipitation_in": 0.02,
                                    "total_snowfall_in": 0
                                },
                                {
                                    "uuid": "5461fedc-65ba-43fe-21dc-111765bafedl",
                                    "name": "OutdoorAirTemperature",
                                    "parent": "ISB1",
                                    "month": 8,
                                    "avg_max_temp_f": 89.25,
                                    "avg_min_temp_f": 55.89,
                                    "avg_temp_f": 72.57,
                                    "total_percipitation_in": 0,
                                    "total_snowfall_in": 0
                                },
                                {
                                    "uuid": "5461fedc-65ba-43fe-21dc-111765bafedl",
                                    "name": "OutdoorAirTemperature",
                                    "parent": "ISB1",
                                    "month": 9,
                                    "avg_max_temp_f": 82,
                                    "avg_min_temp_f": 50.78,
                                    "avg_temp_f": 66.39,
                                    "total_percipitation_in": 0.92,
                                    "total_snowfall_in": 0
                                },
                                {
                                    "uuid": "5461fedc-65ba-43fe-21dc-111765bafedl",
                                    "name": "OutdoorAirTemperature",
                                    "parent": "ISB1",
                                    "month": 10,
                                    "avg_max_temp_f": 69.5,
                                    "avg_min_temp_f": 39.5,
                                    "avg_temp_f": 54.5,
                                    "total_percipitation_in": 0.94,
                                    "total_snowfall_in": 0
                                },
                                {
                                    "uuid": "5461fedc-65ba-43fe-21dc-111765bafedl",
                                    "name": "OutdoorAirTemperature",
                                    "parent": "ISB1",
                                    "month": 11,
                                    "avg_max_temp_f": 60.32,
                                    "avg_min_temp_f": 33.63,
                                    "avg_temp_f": 46.97,
                                    "total_percipitation_in": 0.73,
                                    "total_snowfall_in": 0
                                },
                                {
                                    "uuid": "5461fedc-65ba-43fe-21dc-111765bafedl",
                                    "name": "OutdoorAirTemperature",
                                    "parent": "ISB1",
                                    "month": 12,
                                    "avg_max_temp_f": 48.81,
                                    "avg_min_temp_f": 24.95,
                                    "avg_temp_f": 36.88,
                                    "total_percipitation_in": 1.53,
                                    "total_snowfall_in": 10.5
                                }
                            ]
                        },
                        "6451fedc-65ba-43fe-21dc-000765bafedl":
                        {
                            "uuid": "6451fedc-65ba-43fe-21dc-000765bafedl",
                            "name": "WholeBuildingPower",
                            "expanded": null,
                            "visible": true,
                            "status": "GOOD",
                            "type": "point",
                            "sortOrder": 0,
                            "children": [],
                            "path": ["platforms", "4687fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1111fedc-65ba-43fe-21dc-098765bafede", "points", "6451fedc-65ba-43fe-21dc-000765bafedl"],
                            "data": [
                                {
                                    "uuid": "6451fedc-65ba-43fe-21dc-000765bafedl",
                                    "name": "WholeBuildingPower",
                                    "parent": "ISB1",
                                    "month": 1,
                                    "avg_max_temp_f": 44.25,
                                    "avg_min_temp_f": 23.25,
                                    "avg_temp_f": 33.75,
                                    "total_percipitation_in": 0.91,
                                    "total_snowfall_in": 2
                                },
                                {
                                    "uuid": "6451fedc-65ba-43fe-21dc-000765bafedl",
                                    "name": "WholeBuildingPower",
                                    "parent": "ISB1",
                                    "month": 2,
                                    "avg_max_temp_f": 53.14,
                                    "avg_min_temp_f": 27.9,
                                    "avg_temp_f": 40.52,
                                    "total_percipitation_in": 0.5,
                                    "total_snowfall_in": 1.1
                                },
                                {
                                    "uuid": "6451fedc-65ba-43fe-21dc-000765bafedl",
                                    "name": "WholeBuildingPower",
                                    "parent": "ISB1",
                                    "month": 3,
                                    "avg_max_temp_f": 61.18,
                                    "avg_min_temp_f": 36.18,
                                    "avg_temp_f": 48.68,
                                    "total_percipitation_in": 2.99,
                                    "total_snowfall_in": 0
                                },
                                {
                                    "uuid": "6451fedc-65ba-43fe-21dc-000765bafedl",
                                    "name": "WholeBuildingPower",
                                    "parent": "ISB1",
                                    "month": 4,
                                    "avg_max_temp_f": 67.76,
                                    "avg_min_temp_f": 41.24,
                                    "avg_temp_f": 54.5,
                                    "total_percipitation_in": 1.64,
                                    "total_snowfall_in": 0.5
                                },
                                {
                                    "uuid": "6451fedc-65ba-43fe-21dc-000765bafedl",
                                    "name": "WholeBuildingPower",
                                    "parent": "ISB1",
                                    "month": 5,
                                    "avg_max_temp_f": 73.55,
                                    "avg_min_temp_f": 47.86,
                                    "avg_temp_f": 60.7,
                                    "total_percipitation_in": 2.96,
                                    "total_snowfall_in": 0
                                },
                                {
                                    "uuid": "6451fedc-65ba-43fe-21dc-000765bafedl",
                                    "name": "WholeBuildingPower",
                                    "parent": "ISB1",
                                    "month": 6,
                                    "avg_max_temp_f": 84.77,
                                    "avg_min_temp_f": 55.1,
                                    "avg_temp_f": 69.93,
                                    "total_percipitation_in": 0.16,
                                    "total_snowfall_in": 0
                                },
                                {
                                    "uuid": "6451fedc-65ba-43fe-21dc-000765bafedl",
                                    "name": "WholeBuildingPower",
                                    "parent": "ISB1",
                                    "month": 7,
                                    "avg_max_temp_f": 93.69,
                                    "avg_min_temp_f": 61.81,
                                    "avg_temp_f": 77.75,
                                    "total_percipitation_in": 0.02,
                                    "total_snowfall_in": 0
                                },
                                {
                                    "uuid": "6451fedc-65ba-43fe-21dc-000765bafedl",
                                    "name": "WholeBuildingPower",
                                    "parent": "ISB1",
                                    "month": 8,
                                    "avg_max_temp_f": 89.25,
                                    "avg_min_temp_f": 55.89,
                                    "avg_temp_f": 72.57,
                                    "total_percipitation_in": 0,
                                    "total_snowfall_in": 0
                                },
                                {
                                    "uuid": "6451fedc-65ba-43fe-21dc-000765bafedl",
                                    "name": "WholeBuildingPower",
                                    "parent": "ISB1",
                                    "month": 9,
                                    "avg_max_temp_f": 82,
                                    "avg_min_temp_f": 50.78,
                                    "avg_temp_f": 66.39,
                                    "total_percipitation_in": 0.92,
                                    "total_snowfall_in": 0
                                },
                                {
                                    "uuid": "6451fedc-65ba-43fe-21dc-000765bafedl",
                                    "name": "WholeBuildingPower",
                                    "parent": "ISB1",
                                    "month": 10,
                                    "avg_max_temp_f": 69.5,
                                    "avg_min_temp_f": 39.5,
                                    "avg_temp_f": 54.5,
                                    "total_percipitation_in": 0.94,
                                    "total_snowfall_in": 0
                                },
                                {
                                    "uuid": "6451fedc-65ba-43fe-21dc-000765bafedl",
                                    "name": "WholeBuildingPower",
                                    "parent": "ISB1",
                                    "month": 11,
                                    "avg_max_temp_f": 60.32,
                                    "avg_min_temp_f": 33.63,
                                    "avg_temp_f": 46.97,
                                    "total_percipitation_in": 0.73,
                                    "total_snowfall_in": 0
                                },
                                {
                                    "uuid": "6451fedc-65ba-43fe-21dc-000765bafedl",
                                    "name": "WholeBuildingPower",
                                    "parent": "ISB1",
                                    "month": 12,
                                    "avg_max_temp_f": 48.81,
                                    "avg_min_temp_f": 24.95,
                                    "avg_temp_f": 36.88,
                                    "total_percipitation_in": 1.53,
                                    "total_snowfall_in": 10.5
                                }
                            ]
                        }
                    },
                    "devices": {       
                        "path": ["platforms", "4687fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1111fedc-65ba-43fe-21dc-098765bafede", "devices"],
                        "name": "Devices",
                        "expanded": null,
                        "visible": true,
                        "status": "GOOD",
                        "type": "type",
                        "sortOrder": _devicesOrder,
                        "children": ["1231fedc-65ba-43fe-21dc-098765bafedl"],
                        "1231fedc-65ba-43fe-21dc-098765bafedl":
                        {
                            "uuid": "1231fedc-65ba-43fe-21dc-098765bafedl",
                            "name": "RTU1",
                            "expanded": null,
                            "visible": true,
                            "status": "GOOD",
                            "type": "device",
                            "sortOrder": 0,
                            "children": ["devices", "points"],
                            "path": ["platforms", "4687fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1111fedc-65ba-43fe-21dc-098765bafede", "devices", "1231fedc-65ba-43fe-21dc-098765bafedl"],
                            "points": {      
                                "path": ["platforms", "4687fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1111fedc-65ba-43fe-21dc-098765bafede", "devices", "1231fedc-65ba-43fe-21dc-098765bafedl", "points"],
                                "name": "Points",
                                "expanded": null,
                                "visible": true,
                                "status": "GOOD",
                                "type": "type",
                                "sortOrder": _pointsOrder,
                                "children": ["5461fedc-65ba-43fe-21dc-222765bafedl", "6451fedc-65ba-43fe-21dc-11165bafedl"],
                                "5461fedc-65ba-43fe-21dc-222765bafedl":
                                {
                                    "uuid": "5461fedc-65ba-43fe-21dc-222765bafedl",
                                    "name": "CoolingCall",
                                    "expanded": null,
                                    "visible": true,
                                    "status": "GOOD",
                                    "type": "point",
                                    "sortOrder": 0,
                                    "children": [],
                                    "path": ["platforms", "4687fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1111fedc-65ba-43fe-21dc-098765bafede", "devices", "1231fedc-65ba-43fe-21dc-098765bafedl", "points", "5461fedc-65ba-43fe-21dc-222765bafedl"],
                                    "data": [
                                        {
                                            "uuid": "5461fedc-65ba-43fe-21dc-222765bafedl",
                                            "name": "CoolingCall",
                                            "parent": "RTU1",
                                            "month": 1,
                                            "avg_max_temp_f": 57.13,
                                            "avg_min_temp_f": 31.32,
                                            "avg_temp_f": 44.23,
                                            "total_percipitation_in": 1.01,
                                            "total_snowfall_in": 0
                                        },
                                        {
                                            "uuid": "5461fedc-65ba-43fe-21dc-222765bafedl",
                                            "name": "CoolingCall",
                                            "parent": "RTU1",
                                            "month": 2,
                                            "avg_max_temp_f": 54.64,
                                            "avg_min_temp_f": 34.82,
                                            "avg_temp_f": 44.73,
                                            "total_percipitation_in": 5.47,
                                            "total_snowfall_in": 2
                                        },
                                        {
                                            "uuid": "5461fedc-65ba-43fe-21dc-222765bafedl",
                                            "name": "CoolingCall",
                                            "parent": "RTU1",
                                            "month": 3,
                                            "avg_max_temp_f": 62.48,
                                            "avg_min_temp_f": 37.44,
                                            "avg_temp_f": 49.96,
                                            "total_percipitation_in": 3.89,
                                            "total_snowfall_in": 1
                                        },
                                        {
                                            "uuid": "5461fedc-65ba-43fe-21dc-222765bafedl",
                                            "name": "CoolingCall",
                                            "parent": "RTU1",
                                            "month": 4,
                                            "avg_max_temp_f": 66.56,
                                            "avg_min_temp_f": 40.5,
                                            "avg_temp_f": 53.53,
                                            "total_percipitation_in": 2.81,
                                            "total_snowfall_in": 0
                                        },
                                        {
                                            "uuid": "5461fedc-65ba-43fe-21dc-222765bafedl",
                                            "name": "CoolingCall",
                                            "parent": "RTU1",
                                            "month": 5,
                                            "avg_max_temp_f": 75.83,
                                            "avg_min_temp_f": 46.83,
                                            "avg_temp_f": 61.33,
                                            "total_percipitation_in": 0.73,
                                            "total_snowfall_in": 0
                                        },
                                        {
                                            "uuid": "5461fedc-65ba-43fe-21dc-222765bafedl",
                                            "name": "CoolingCall",
                                            "parent": "RTU1",
                                            "month": 6,
                                            "avg_max_temp_f": 85.28,
                                            "avg_min_temp_f": 53.39,
                                            "avg_temp_f": 69.33,
                                            "total_percipitation_in": 0.2,
                                            "total_snowfall_in": 0
                                        },
                                        {
                                            "uuid": "5461fedc-65ba-43fe-21dc-222765bafedl",
                                            "name": "CoolingCall",
                                            "parent": "RTU1",
                                            "month": 7,
                                            "avg_max_temp_f": 91,
                                            "avg_min_temp_f": 60.93,
                                            "avg_temp_f": 75.97,
                                            "total_percipitation_in": 0.28,
                                            "total_snowfall_in": 0
                                        },
                                        {
                                            "uuid": "5461fedc-65ba-43fe-21dc-222765bafedl",
                                            "name": "CoolingCall",
                                            "parent": "RTU1",
                                            "month": 8,
                                            "avg_max_temp_f": 88.85,
                                            "avg_min_temp_f": 57.8,
                                            "avg_temp_f": 73.33,
                                            "total_percipitation_in": 0.15,
                                            "total_snowfall_in": 0
                                        },
                                        {
                                            "uuid": "5461fedc-65ba-43fe-21dc-222765bafedl",
                                            "name": "CoolingCall",
                                            "parent": "RTU1",
                                            "month": 9,
                                            "avg_max_temp_f": 85.04,
                                            "avg_min_temp_f": 53.5,
                                            "avg_temp_f": 69.27,
                                            "total_percipitation_in": 0.54,
                                            "total_snowfall_in": 0
                                        },
                                        {
                                            "uuid": "5461fedc-65ba-43fe-21dc-222765bafedl",
                                            "name": "CoolingCall",
                                            "parent": "RTU1",
                                            "month": 10,
                                            "avg_max_temp_f": 76.79,
                                            "avg_min_temp_f": 36.18,
                                            "avg_temp_f": 56.48,
                                            "total_percipitation_in": 0,
                                            "total_snowfall_in": 0
                                        },
                                        {
                                            "uuid": "5461fedc-65ba-43fe-21dc-222765bafedl",
                                            "name": "CoolingCall",
                                            "parent": "RTU1",
                                            "month": 11,
                                            "avg_max_temp_f": 59.27,
                                            "avg_min_temp_f": 33.53,
                                            "avg_temp_f": 46.4,
                                            "total_percipitation_in": 2.98,
                                            "total_snowfall_in": 0
                                        },
                                        {
                                            "uuid": "5461fedc-65ba-43fe-21dc-222765bafedl",
                                            "name": "CoolingCall",
                                            "parent": "RTU1",
                                            "month": 12,
                                            "avg_max_temp_f": 48.86,
                                            "avg_min_temp_f": 32.79,
                                            "avg_temp_f": 40.82,
                                            "total_percipitation_in": 4.71,
                                            "total_snowfall_in": 1.2
                                        }
                                    ]
                                },
                                "6451fedc-65ba-43fe-21dc-11165bafedl":
                                {
                                    "uuid": "6451fedc-65ba-43fe-21dc-11165bafedl",
                                    "name": "CondenserFanPower",
                                    "expanded": null,
                                    "visible": true,
                                    "status": "GOOD",
                                    "type": "point",
                                    "sortOrder": 0,
                                    "children": [],
                                    "path": ["platforms", "4687fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1111fedc-65ba-43fe-21dc-098765bafede", "devices", "1231fedc-65ba-43fe-21dc-098765bafedl", "points", "6451fedc-65ba-43fe-21dc-11165bafedl"],
                                    "data": [
                                        {
                                            "uuid": "6451fedc-65ba-43fe-21dc-11165bafedl",
                                            "name": "CondenserFanPower",
                                            "parent": "RTU1",
                                            "month": 1,
                                            "avg_max_temp_f": 56.96,
                                            "avg_min_temp_f": 30.39,
                                            "avg_temp_f": 43.68,
                                            "total_percipitation_in": 0.1,
                                            "total_snowfall_in": 0
                                        },
                                        {
                                            "uuid": "6451fedc-65ba-43fe-21dc-11165bafedl",
                                            "name": "CondenserFanPower",
                                            "parent": "RTU1",
                                            "month": 2,
                                            "avg_max_temp_f": 64.82,
                                            "avg_min_temp_f": 36,
                                            "avg_temp_f": 50.3,
                                            "total_percipitation_in": 1.63,
                                            "total_snowfall_in": 0
                                        },
                                        {
                                            "uuid": "6451fedc-65ba-43fe-21dc-11165bafedl",
                                            "name": "CondenserFanPower",
                                            "parent": "RTU1",
                                            "month": 3,
                                            "avg_max_temp_f": 67.29,
                                            "avg_min_temp_f": 38.33,
                                            "avg_temp_f": 52.81,
                                            "total_percipitation_in": 0.43,
                                            "total_snowfall_in": 0
                                        },
                                        {
                                            "uuid": "6451fedc-65ba-43fe-21dc-11165bafedl",
                                            "name": "CondenserFanPower",
                                            "parent": "RTU1",
                                            "month": 4,
                                            "avg_max_temp_f": 66.35,
                                            "avg_min_temp_f": 37.73,
                                            "avg_temp_f": 52.04,
                                            "total_percipitation_in": 3.15,
                                            "total_snowfall_in": 4.5
                                        },
                                        {
                                            "uuid": "6451fedc-65ba-43fe-21dc-11165bafedl",
                                            "name": "CondenserFanPower",
                                            "parent": "RTU1",
                                            "month": 5,
                                            "avg_max_temp_f": 68.81,
                                            "avg_min_temp_f": 43.96,
                                            "avg_temp_f": 56.38,
                                            "total_percipitation_in": 1.97,
                                            "total_snowfall_in": 0
                                        },
                                        {
                                            "uuid": "6451fedc-65ba-43fe-21dc-11165bafedl",
                                            "name": "CondenserFanPower",
                                            "parent": "RTU1",
                                            "month": 6,
                                            "avg_max_temp_f": 87.97,
                                            "avg_min_temp_f": 57.23,
                                            "avg_temp_f": 72.6,
                                            "total_percipitation_in": 0.79,
                                            "total_snowfall_in": 0
                                        },
                                        {
                                            "uuid": "6451fedc-65ba-43fe-21dc-11165bafedl",
                                            "name": "CondenserFanPower",
                                            "parent": "RTU1",
                                            "month": 7,
                                            "avg_max_temp_f": 87.68,
                                            "avg_min_temp_f": 59.71,
                                            "avg_temp_f": 73.69,
                                            "total_percipitation_in": 2.58,
                                            "total_snowfall_in": 0
                                        },
                                        {
                                            "uuid": "6451fedc-65ba-43fe-21dc-11165bafedl",
                                            "name": "CondenserFanPower",
                                            "parent": "RTU1",
                                            "month": 8,
                                            "avg_max_temp_f": 91.39,
                                            "avg_min_temp_f": 58.68,
                                            "avg_temp_f": 75.03,
                                            "total_percipitation_in": 0.04,
                                            "total_snowfall_in": 0
                                        },
                                        {
                                            "uuid": "6451fedc-65ba-43fe-21dc-11165bafedl",
                                            "name": "CondenserFanPower",
                                            "parent": "RTU1",
                                            "month": 9,
                                            "avg_max_temp_f": 85.07,
                                            "avg_min_temp_f": 55.86,
                                            "avg_temp_f": 70.41,
                                            "total_percipitation_in": 0.15,
                                            "total_snowfall_in": 0
                                        },
                                        {
                                            "uuid": "6451fedc-65ba-43fe-21dc-11165bafedl",
                                            "name": "CondenserFanPower",
                                            "parent": "RTU1",
                                            "month": 10,
                                            "avg_max_temp_f": 73.26,
                                            "avg_min_temp_f": 46.17,
                                            "avg_temp_f": 59.93,
                                            "total_percipitation_in": 3.37,
                                            "total_snowfall_in": 0
                                        },
                                        {
                                            "uuid": "6451fedc-65ba-43fe-21dc-11165bafedl",
                                            "name": "CondenserFanPower",
                                            "parent": "RTU1",
                                            "month": 11,
                                            "avg_max_temp_f": 50.5,
                                            "avg_min_temp_f": 29.36,
                                            "avg_temp_f": 39.93,
                                            "total_percipitation_in": 3.74,
                                            "total_snowfall_in": 0
                                        },
                                        {
                                            "uuid": "6451fedc-65ba-43fe-21dc-11165bafedl",
                                            "name": "CondenserFanPower",
                                            "parent": "RTU1",
                                            "month": 12,
                                            "avg_max_temp_f": 43.42,
                                            "avg_min_temp_f": 24.65,
                                            "avg_temp_f": 34.03,
                                            "total_percipitation_in": 5.18,
                                            "total_snowfall_in": 0
                                        }
                                    ]
                                }
                            },
                            "devices": {    
                                "path": ["platforms", "4687fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1111fedc-65ba-43fe-21dc-098765bafede", "devices", "1231fedc-65ba-43fe-21dc-098765bafedl", "devices"],
                                "name": "Devices",
                                "expanded": null,
                                "visible": true,
                                "status": "GOOD",
                                "type": "type",
                                "sortOrder": _devicesOrder,
                                "children": ["4488fedc-65ba-43fe-21dc-098765bafedl"],
                                "4488fedc-65ba-43fe-21dc-098765bafedl":
                                {
                                    "uuid": "4488fedc-65ba-43fe-21dc-098765bafedl",
                                    "name": "Zone",
                                    "expanded": null,
                                    "visible": true,
                                    "status": "GOOD",
                                    "type": "device",
                                    "sortOrder": 0,
                                    "children": ["points"],
                                    "path": ["platforms", "4687fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1111fedc-65ba-43fe-21dc-098765bafede", "devices", "1231fedc-65ba-43fe-21dc-098765bafedl", "devices", "4488fedc-65ba-43fe-21dc-098765bafedl"],
                                    "points": {  
                                        "path": ["platforms", "4687fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1111fedc-65ba-43fe-21dc-098765bafede", "devices", "1231fedc-65ba-43fe-21dc-098765bafedl", "devices", "4488fedc-65ba-43fe-21dc-098765bafedl", "points"],
                                        "name": "Points",
                                        "expanded": null,
                                        "visible": true,
                                        "status": "GOOD",
                                        "type": "type",
                                        "sortOrder": _pointsOrder,
                                        "children": ["5461fedc-65ba-43fe-21dc-098765bafedl", "6451fedc-65ba-43fe-21dc-098765bafedl"],
                                        "5461fedc-65ba-43fe-21dc-098765bafedl":
                                        {
                                            "uuid": "5461fedc-65ba-43fe-21dc-098765bafedl",
                                            "name": "FirstStageAuxilaryHeat",
                                            "expanded": null,
                                            "visible": true,
                                            "status": "GOOD",
                                            "type": "point",
                                            "sortOrder": 0,
                                            "children": [],
                                            "path": ["platforms", "4687fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1111fedc-65ba-43fe-21dc-098765bafede", "devices", "1231fedc-65ba-43fe-21dc-098765bafedl", "devices", "4488fedc-65ba-43fe-21dc-098765bafedl", "points", "5461fedc-65ba-43fe-21dc-098765bafedl"]
                                        },
                                        "6451fedc-65ba-43fe-21dc-098765bafedl":
                                        {
                                            "uuid": "6451fedc-65ba-43fe-21dc-098765bafedl",
                                            "name": "SecondStageAuxilaryHeat",
                                            "expanded": null,
                                            "visible": true,
                                            "status": "GOOD",
                                            "type": "point",
                                            "sortOrder": 0,
                                            "children": [],
                                            "path": ["platforms", "4687fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1111fedc-65ba-43fe-21dc-098765bafede", "devices", "1231fedc-65ba-43fe-21dc-098765bafedl", "devices", "4488fedc-65ba-43fe-21dc-098765bafedl", "points", "6451fedc-65ba-43fe-21dc-098765bafedl"]
                                        }
                                    }
                                }
                            }
                        }
                    }   
                }
            }
        },
        "9757fedc-65ba-43fe-21dc-098765bafedc":
        {
            "uuid": "9757fedc-65ba-43fe-21dc-098765bafedc",
            "name": "WSU",
            "expanded": null,
            "visible": true,
            "status": "BAD",
            "type": "platform",
            "sortOrder": 0,
            "children": ["agents", "buildings"],
            "path": ["platforms", "9757fedc-65ba-43fe-21dc-098765bafedc"],
            "agents": {                
                "path": ["platforms", "9757fedc-65ba-43fe-21dc-098765bafedc", "agents"],
                "name": "Agents",
                "expanded": null,
                "visible": true,
                "status": "GOOD",
                "type": "type",
                "sortOrder": _agentsOrder,
                "children": ["2461fedc-65ba-43fe-21dc-098765bafede", "7897fedc-65ba-43fe-21dc-098765bafedf"], 
                "2461fedc-65ba-43fe-21dc-098765bafede":
                {
                    "uuid": "2461fedc-65ba-43fe-21dc-098765bafede",
                    "name": "Platform Agent",
                    "expanded": null,
                    "visible": true,
                    "status": "GOOD",
                    "type": "agent",
                    "sortOrder": 0,
                    "children": [],
                    "path": ["platforms", "9757fedc-65ba-43fe-21dc-098765bafedc", "agents", "2461fedc-65ba-43fe-21dc-098765bafede"]
                },
                "7897fedc-65ba-43fe-21dc-098765bafedf":
                {
                    "uuid": "7897fedc-65ba-43fe-21dc-098765bafedf",
                    "name": "SqlHistorian",
                    "expanded": null,
                    "visible": true,
                    "status": "GOOD",
                    "type": "agent",
                    "sortOrder": 0,
                    "children": [],
                    "path": ["platforms", "9757fedc-65ba-43fe-21dc-098765bafedc", "agents", "7897fedc-65ba-43fe-21dc-098765bafedf"]
                }
            },
            "buildings": {             
                "path": ["platforms", "9757fedc-65ba-43fe-21dc-098765bafedc", "buildings"],
                "name": "Buildings",
                "expanded": null,
                "visible": true,
                "status": "BAD",
                "type": "type",
                "sortOrder": _buildingsOrder,
                "children": ["1111fedc-65ba-43fe-21dc-098765bafede", "1333fedc-65ba-43fe-21dc-098765bafede"],
                "1111fedc-65ba-43fe-21dc-098765bafede":
                {
                    "uuid": "1111fedc-65ba-43fe-21dc-098765bafede",
                    "name": "BSEL",
                    "expanded": null,
                    "visible": true,
                    "status": "BAD",
                    "type": "building",
                    "sortOrder": 0,
                    "children": ["devices", "points"],
                    "path": ["platforms", "9757fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1111fedc-65ba-43fe-21dc-098765bafede"],
                    "points": {         
                        "path": ["platforms", "9757fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1111fedc-65ba-43fe-21dc-098765bafede", "points"],
                        "name": "Points",
                        "expanded": null,
                        "visible": true,
                        "status": "UNKNOWN",
                        "type": "type",
                        "sortOrder": _pointsOrder,
                        "children": ["5461fedc-65ba-43fe-21dc-098765bafedl", "6451fedc-65ba-43fe-21dc-098765bafedl"], 
                        "5461fedc-65ba-43fe-21dc-098765bafedl":
                        {
                            "uuid": "5461fedc-65ba-43fe-21dc-098765bafedl",
                            "name": "OutdoorAirTemperature",
                            "expanded": null,
                            "visible": true,
                            "status": "GOOD",
                            "type": "point",
                            "sortOrder": 0,
                            "children": [],
                            "path": ["platforms", "9757fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1111fedc-65ba-43fe-21dc-098765bafede", "points", "5461fedc-65ba-43fe-21dc-098765bafedl"],
                            "parentPath": "WSU > BSEL",
                            "parentType": "building",
                            "parentUuid": "1111fedc-65ba-43fe-21dc-098765bafede"
                        },
                        "6451fedc-65ba-43fe-21dc-098765bafedl":
                        {
                            "uuid": "6451fedc-65ba-43fe-21dc-098765bafedl",
                            "name": "LightingStatus",
                            "expanded": null,
                            "visible": true,
                            "status": "UNKNOWN",
                            "type": "point",
                            "sortOrder": 0,
                            "children": [],
                            "path": ["platforms", "9757fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1111fedc-65ba-43fe-21dc-098765bafede", "points", "6451fedc-65ba-43fe-21dc-098765bafedl"]
                        }
                    },
                    "devices": {       
                        "path": ["platforms", "9757fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1111fedc-65ba-43fe-21dc-098765bafede", "devices"],
                        "name": "Devices",
                        "expanded": null,
                        "visible": true,
                        "status": "BAD",
                        "type": "type",
                        "sortOrder": _devicesOrder,
                        "children": ["1231fedc-65ba-43fe-21dc-098765bafedl"],
                        "1231fedc-65ba-43fe-21dc-098765bafedl":
                        {
                            "uuid": "1231fedc-65ba-43fe-21dc-098765bafedl",
                            "name": "AHU",
                            "expanded": null,
                            "visible": true,
                            "status": "BAD",
                            "type": "device",
                            "sortOrder": 0,
                            "children": ["devices", "points"],
                            "path": ["platforms", "9757fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1111fedc-65ba-43fe-21dc-098765bafede", "devices", "1231fedc-65ba-43fe-21dc-098765bafedl"],
                            "points": {      
                                "path": ["platforms", "9757fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1111fedc-65ba-43fe-21dc-098765bafede", "devices", "1231fedc-65ba-43fe-21dc-098765bafedl", "points"],
                                "name": "Points",
                                "expanded": null,
                                "visible": true,
                                "status": "GOOD",
                                "type": "type",
                                "sortOrder": _pointsOrder,
                                "children": ["6451fedc-65ba-43fe-21dc-098765bafedl"],                                
                                "6451fedc-65ba-43fe-21dc-098765bafedl":
                                {
                                    "uuid": "6451fedc-65ba-43fe-21dc-098765bafedl",
                                    "name": "DuctStaticPressureSetPoint",
                                    "expanded": null,
                                    "visible": true,
                                    "status": "GOOD",
                                    "type": "point",
                                    "sortOrder": 0,
                                    "children": [],
                                    "path": ["platforms", "9757fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1111fedc-65ba-43fe-21dc-098765bafede", "devices", "1231fedc-65ba-43fe-21dc-098765bafedl", "points", "6451fedc-65ba-43fe-21dc-098765bafedl"]
                                }
                            },
                            "devices": {    
                                "path": ["platforms", "9757fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1111fedc-65ba-43fe-21dc-098765bafede", "devices", "1231fedc-65ba-43fe-21dc-098765bafedl", "devices"],
                                "name": "Devices",
                                "expanded": null,
                                "visible": true,
                                "status": "BAD",
                                "type": "type",
                                "sortOrder": _devicesOrder,
                                "children": ["4488fedc-65ba-43fe-21dc-098765bafedl"],
                                "4488fedc-65ba-43fe-21dc-098765bafedl":
                                {
                                    "uuid": "4488fedc-65ba-43fe-21dc-098765bafedl",
                                    "name": "Zone",
                                    "expanded": null,
                                    "visible": true,
                                    "status": "BAD",
                                    "type": "device",
                                    "sortOrder": 0,
                                    "children": ["points"],
                                    "path": ["platforms", "9757fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1111fedc-65ba-43fe-21dc-098765bafede", "devices", "1231fedc-65ba-43fe-21dc-098765bafedl", "devices", "4488fedc-65ba-43fe-21dc-098765bafedl"],
                                    "points": {  
                                        "path": ["platforms", "9757fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1111fedc-65ba-43fe-21dc-098765bafede", "devices", "1231fedc-65ba-43fe-21dc-098765bafedl", "devices", "4488fedc-65ba-43fe-21dc-098765bafedl", "points"],
                                        "name": "Points",
                                        "expanded": null,
                                        "visible": true,
                                        "status": "BAD",
                                        "type": "type",
                                        "sortOrder": _pointsOrder,
                                        "children": ["5461fedc-65ba-43fe-21dc-098765bafedl", "6451fedc-65ba-43fe-21dc-098765bafedl"],
                                        "5461fedc-65ba-43fe-21dc-098765bafedl":
                                        {
                                            "uuid": "5461fedc-65ba-43fe-21dc-098765bafedl",
                                            "name": "TerminalBoxDamperCommand",
                                            "expanded": null,
                                            "visible": true,
                                            "status": "BAD",
                                            "type": "point",
                                            "sortOrder": 0,
                                            "children": [],
                                            "path": ["platforms", "9757fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1111fedc-65ba-43fe-21dc-098765bafede", "devices", "1231fedc-65ba-43fe-21dc-098765bafedl", "devices", "4488fedc-65ba-43fe-21dc-098765bafedl", "points", "5461fedc-65ba-43fe-21dc-098765bafedl"]
                                        },
                                        "6451fedc-65ba-43fe-21dc-098765bafedl":
                                        {
                                            "uuid": "6451fedc-65ba-43fe-21dc-098765bafedl",
                                            "name": "ZoneTemperature",
                                            "expanded": null,
                                            "visible": true,
                                            "status": "GOOD",
                                            "type": "point",
                                            "sortOrder": 0,
                                            "children": [],
                                            "path": ["platforms", "9757fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1111fedc-65ba-43fe-21dc-098765bafede", "devices", "1231fedc-65ba-43fe-21dc-098765bafedl", "devices", "4488fedc-65ba-43fe-21dc-098765bafedl", "points", "6451fedc-65ba-43fe-21dc-098765bafedl"]
                                        }
                                    }
                                }
                            }
                        }
                    }   
                },
                "1333fedc-65ba-43fe-21dc-098765bafede":
                {
                    "uuid": "1333fedc-65ba-43fe-21dc-098765bafede",
                    "name": "CIC",
                    "expanded": null,
                    "visible": true,
                    "status": "GOOD",
                    "type": "building",
                    "sortOrder": 0,
                    "children": ["devices", "points"],
                    "path": ["platforms", "9757fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1333fedc-65ba-43fe-21dc-098765bafede"],
                    "points": {         
                        "path": ["platforms", "9757fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1333fedc-65ba-43fe-21dc-098765bafede", "points"],
                        "name": "Points",
                        "expanded": null,
                        "visible": true,
                        "status": "GOOD",
                        "type": "type",
                        "sortOrder": _pointsOrder,
                        "children": ["5461fedc-65ba-43fe-21dc-098765bafedl", "6451fedc-65ba-43fe-21dc-098765bafedl"], 
                        "5461fedc-65ba-43fe-21dc-098765bafedl":
                        {
                            "uuid": "5461fedc-65ba-43fe-21dc-098765bafedl",
                            "name": "WholeBuildingGas",
                            "expanded": null,
                            "visible": true,
                            "status": "GOOD",
                            "type": "point",
                            "sortOrder": 0,
                            "children": [],
                            "path": ["platforms", "9757fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1333fedc-65ba-43fe-21dc-098765bafede", "points", "5461fedc-65ba-43fe-21dc-098765bafedl"]
                        },
                        "6451fedc-65ba-43fe-21dc-098765bafedl":
                        {
                            "uuid": "6451fedc-65ba-43fe-21dc-098765bafedl",
                            "name": "OutdoorAirRelativeHumidity",
                            "expanded": null,
                            "visible": true,
                            "status": "GOOD",
                            "type": "point",
                            "sortOrder": 0,
                            "children": [],
                            "path": ["platforms", "9757fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1333fedc-65ba-43fe-21dc-098765bafede", "points", "6451fedc-65ba-43fe-21dc-098765bafedl"]
                        }
                    },
                    "devices": {       
                        "path": ["platforms", "9757fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1333fedc-65ba-43fe-21dc-098765bafede", "devices"],
                        "name": "Devices",
                        "expanded": null,
                        "visible": true,
                        "status": "GOOD",
                        "type": "type",
                        "sortOrder": _devicesOrder,
                        "children": ["1231fedc-65ba-43fe-21dc-098765bafedl"],
                        "1231fedc-65ba-43fe-21dc-098765bafedl":
                        {
                            "uuid": "1231fedc-65ba-43fe-21dc-098765bafedl",
                            "name": "Chilled_Water_Distribution_System",
                            "expanded": null,
                            "visible": true,
                            "status": "GOOD",
                            "type": "device",
                            "sortOrder": 0,
                            "children": ["points"],
                            "path": ["platforms", "9757fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1333fedc-65ba-43fe-21dc-098765bafede", "devices", "1231fedc-65ba-43fe-21dc-098765bafedl"],
                            "points": {      
                                "path": ["platforms", "9757fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1333fedc-65ba-43fe-21dc-098765bafede", "devices", "1231fedc-65ba-43fe-21dc-098765bafedl", "points"],
                                "name": "Points",
                                "expanded": null,
                                "visible": true,
                                "status": "GOOD",
                                "type": "type",
                                "sortOrder": _pointsOrder,
                                "children": ["6451fedc-65ba-43fe-21dc-098765bafedl"],                                
                                "6451fedc-65ba-43fe-21dc-098765bafedl":
                                {
                                    "uuid": "6451fedc-65ba-43fe-21dc-098765bafedl",
                                    "name": "NaturalGasEnergy",
                                    "expanded": null,
                                    "visible": true,
                                    "status": "GOOD",
                                    "type": "point",
                                    "sortOrder": 0,
                                    "children": [],
                                    "path": ["platforms", "9757fedc-65ba-43fe-21dc-098765bafedc", "buildings", "1333fedc-65ba-43fe-21dc-098765bafede", "devices", "1231fedc-65ba-43fe-21dc-098765bafedl", "points", "6451fedc-65ba-43fe-21dc-098765bafedl"]
                                }
                            }
                        }
                    }   
                }
            }
        }
    }
};

var _expanded = false;
var _itemTypes = ["platforms", "buildings", "agents", "devices", "points"];

var platformsPanelItemsStore = new Store();

platformsPanelItemsStore.getItem = function (itemPath)
{
    var itemsList = [];
    var item = _items;
    
    for (var i = 0; i < itemPath.length; i++)
    {
        if (item.hasOwnProperty(itemPath[i]))
        {
            item = item[itemPath[i]];
        }
    }

    return item;
}  

platformsPanelItemsStore.getHistorian = function (platformUuid)
{
    var itemsList = [];
    var item = _items;

    var platform = _items.platforms[platformUuid];

    var historianUuid = platform.agents.children.find(function (child) {

        return platform.agents[child].name.indexOf("historian") > -1;
    });

    return historianUuid;
}  

platformsPanelItemsStore.getChildren = function (parent, parentPath) {

    var itemsList = [];
    var item = _items;

    if (parentPath !== null) // for everything but the top level, drill down to the parent
    {
        for (var i = 0; i < parentPath.length; i++)
        {
            if (item.hasOwnProperty(parentPath[i]))
            {
                item = item[parentPath[i]];
            }
        }
    
          
        for (var i = 0; i < item.children.length; i++)
        {           
            itemsList.push(item[item.children[i]]);
        }
            
    }
    else
    {
        for (var key in item[parent])
        {
            itemsList.push(item[parent][key]);
        }
    } 

    return itemsList;
};

platformsPanelItemsStore.loadFilteredItems = function (filterTerm, filterStatus) {

    var filterItems = function (parent, filterTerm, filterStatus) {

        var notAMatch;
        var compareTerm;

        if (filterTerm === "")
        {
            notAMatch = function (parent, filterStatus)
            {
                if (parent.hasOwnProperty("status"))
                {
                    return (parent.status !== filterStatus);                
                }
                else
                {
                    return (filterStatus !== "UNKNOWN");
                }
            }

            compareTerm = filterStatus;
        }
        else if (filterStatus === "")
        {
            notAMatch = function (parent, filterTerm)
            {
                var upperParent = parent.name.toUpperCase();;
                var filterStr = filterTerm;

                var filterParts = filterTerm.split(" ");
                var foundColon = (filterParts[0].indexOf(":") > -1);

                if (foundColon)
                {
                    var index = filterTerm.indexOf(":");
                    var filterKey = filterTerm.substring(0, index);
                    filterStr = filterTerm.substring(index + 1);

                    if (parent.hasOwnProperty(filterKey))
                    {
                        upperParent = parent[filterKey].toUpperCase();    
                    }
                    else
                    {
                        return true;
                    }
                }               

                return (upperParent.trim().indexOf(filterStr.trim().toUpperCase()) < 0);
            }

            compareTerm = filterTerm;
        }

        if (parent.children.length === 0)
        {
            parent.visible = !notAMatch(parent, compareTerm);
            parent.expanded = null;

            return parent;
        }
        else
        {
            var childrenToHide = 0;

            for (var i = 0; i < parent.children.length; i++)
            {
                var childString = parent.children[i];
                var filteredChild = filterItems(parent[childString], filterTerm, filterStatus);

                if (!filteredChild.visible)
                {
                    ++childrenToHide;
                }
            }
            
            if (childrenToHide === parent.children.length)
            {
                parent.visible = !notAMatch(parent, compareTerm);
                parent.expanded = false;
            }
            else
            {
                parent.visible = true;
                parent.expanded = true;
            }        

            return parent;
        }
    }

    for (var key in _items.platforms)
    {
        if (filterTerm !== "" || filterStatus !== "")
        {
            filterItems(_items.platforms[key], filterTerm, filterStatus);
        }
        else
        {
            expandAllChildren(_items.platforms[key], false);
            _items.platforms[key].visible = true;
        }        
    }

}

var expandAllChildren = function (parent, expanded) {
    
    for (var i = 0; i < parent.children.length; i++)
    {
        var childString = parent.children[i];
        expandAllChildren(parent[childString], expanded);
    }

    if (parent.children.length > 0)
    {
        parent.expanded = expanded;
    }
    else
    {
        parent.expanded = null;
    }

    parent.visible = true;
};


platformsPanelItemsStore.getExpanded = function () {
    return _expanded;
};

platformsPanelItemsStore.dispatchToken = dispatcher.register(function (action) {

    switch (action.type) {

        case ACTION_TYPES.FILTER_ITEMS:

            var filterTerm = action.filterTerm;
            var filterStatus = action.filterStatus;
            platformsPanelItemsStore.loadFilteredItems(filterTerm, filterStatus);

            platformsPanelItemsStore.emitChange();

            break;
        case ACTION_TYPES.EXPAND_ALL:

            var item = platformsPanelItemsStore.getItem(action.itemPath);
            
            var expanded = (item.expanded !== null ? !item.expanded : true);

            expandAllChildren(item, expanded);

            platformsPanelItemsStore.emitChange();

            break;

        case ACTION_TYPES.TOGGLE_ITEM:

            var item = platformsPanelItemsStore.getItem(action.itemPath);
            item.expanded = !item.expanded;

            platformsPanelItemsStore.emitChange();

            break;

        case ACTION_TYPES.CHECK_ITEM:

            var item = platformsPanelItemsStore.getItem(action.itemPath);
            item.checked = action.checked;

            platformsPanelItemsStore.emitChange();

            break;

        case ACTION_TYPES.RECEIVE_PLATFORM_STATUSES:
            
            var platforms = action.platforms;

            platforms.forEach(function (platform)
            {
                _items["platforms"][platform.uuid] = platform; 
                
                var platformItem = _items["platforms"][platform.uuid];
                platformItem.path = ["platforms", platform.uuid];

                platformItem.status = platform.health.status.toUpperCase();
                platformItem.context = platform.health.context;
                platformItem.children = [];
                platformItem.type = "platform";
                platformItem.visible = true;
                platformItem.expanded = null;
                // platformItem.name = (platform.name === null ? platform.uuid : platform.name);

                loadAgents(platform);                
                loadDevices(platform);
            });

            var platformsToRemove = [];

            for (var key in _items.platforms)
            {
                var match = platforms.find(function (platform) {
                    return key === platform.uuid;
                });

                if (!match)
                {
                    platformsToRemove.push(key);
                }
            }

            platformsToRemove.forEach(function (uuid) {
                delete _items.platforms[uuid];
            });            
            
            platformsPanelItemsStore.emitChange();
            break;
        case ACTION_TYPES.RECEIVE_BUILDING_STATUSES:
            
            var platform = _items["platforms"][action.platform.uuid];

            if (platform.children.length > 0)
            {
                platform.expanded = true;
            }
            
            platformsPanelItemsStore.emitChange();
            break;
        case ACTION_TYPES.RECEIVE_AGENT_STATUSES:

            var platform = _items["platforms"][action.platform.uuid];

            if (action.agents.length > 0)
            {
                insertAgents(platform, action.agents);
            }

            platformsPanelItemsStore.emitChange();
            break;
        case ACTION_TYPES.RECEIVE_DEVICE_STATUSES:

            var platform = _items["platforms"][action.platform.uuid];

            if (action.devices.length > 0)
            {
                insertDevices(platform, action.devices);
            }

            platformsPanelItemsStore.emitChange();
            break;
        case ACTION_TYPES.RECEIVE_POINT_STATUSES:
            
            switch (action.parent.type)
            {
                case "platform":
            
                    var platform = _items["platforms"][action.parent.uuid];

                    if (action.points.length > 0)
                    {
                        platform.expanded = true;
                        platform.points = {};
                        platform.points.path = platform.path.slice(0);
                        platform.points.path.push("points");
                        platform.points.name = "Points";
                        platform.points.expanded = false;
                        platform.points.visible = true;
                        platform.points.children = [];
                        platform.points.type = "type";
                        platform.points.sortOrder = _pointsOrder;

                        if (platform.children.indexOf("points") < 0)
                        {
                            platform.children.push("points");
                        }

                        action.points.forEach(function (point)
                        {
                            //TODO: add UUID to points rpc?

                            var pointProps = point;
                            pointProps.expanded = false;
                            pointProps.visible = true;
                            pointProps.path = platform.points.path.slice(0);

                            var uuid = (point.hasOwnProperty("topic") ? point.topic : point.uuid);
                            
                            pointProps.uuid = uuid;
                            pointProps.path.push(uuid);
                            pointProps.topic = point.topic;

                            pointProps.parentPath = getParentPath(platform);
                            
                            pointProps.parentType = platform.type;
                            pointProps.parentUuid = platform.uuid;

                            // point.status = "GOOD";
                            pointProps.children = [];
                            pointProps.type = "point";
                            pointProps.sortOrder = 0;
                            platform.points.children.push(uuid); 
                            platform.points[uuid] = pointProps;
                        });

                    }

                    break;
            }

            platformsPanelItemsStore.emitChange();
            break;
        case ACTION_TYPES.RECEIVE_PANEL_CHILDREN:
            
            var item = platformsPanelItemsStore.getItem(action.platform.path);

            // var platform = _items["platforms"][action.platform.uuid];

            if (item.children.length > 0)
            {
                item.expanded = true;
            }

            platformsPanelItemsStore.emitChange();
            break;
    }

    function insertAgents(platform, agents)
    {
        var agentsToInsert = JSON.parse(JSON.stringify(agents));

        platform.agents = {};
        platform.agents.path = JSON.parse(JSON.stringify(platform.path));
        platform.agents.path.push("agents");
        platform.agents.name = "Agents";
        platform.agents.expanded = false;
        platform.agents.visible = true;
        platform.agents.children = [];
        platform.agents.type = "type";
        platform.agents.sortOrder = _agentsOrder;

        if (platform.children.indexOf("agents") < 0)
        {
            platform.children.push("agents");
        }

        var agentsHealth;

        agentsToInsert.forEach(function (agent)
        {
            var agentProps = agent;
            agentProps.expanded = false;
            agentProps.visible = true;
            agentProps.path = JSON.parse(JSON.stringify(platform.agents.path));
            agentProps.path.push(agent.uuid);
            agentProps.status = agent.health.status.toUpperCase();
            agentProps.context = agent.health.context;
            agentProps.children = [];
            agentProps.type = "agent";
            agentProps.sortOrder = 0;
            platform.agents.children.push(agent.uuid); 
            platform.agents[agent.uuid] = agentProps;

            agentsHealth = checkStatuses(agentsHealth, agentProps);
        });

        platform.agents.status = agentsHealth;
    }

    function loadAgents(platform)
    {
        if (platform.agents)
        {
            if (platform.agents.length > 0)
            {
                insertAgents(platform, platform.agents);
            }
            else
            {
                delete platform.agents;
            }
        }
    }

    function insertBuilding(platform, uuid, name)
    {
        if (platform.children.indexOf("buildings") < 0)
        {
            platform.children.push("buildings");

            platform.buildings = {};
            platform.buildings.name = "Building";
            platform.buildings.children = [];
            platform.buildings.path = JSON.parse(JSON.stringify(platform.path));
            platform.buildings.path.push("buildings");
            platform.buildings.expanded = false;
            platform.buildings.visible = true;
            platform.buildings.type = "type";
            platform.buildings.sortOrder = _buildingsOrder;
        }

        if (!platform.buildings.hasOwnProperty(uuid))
        {
            var buildingProps = {};
            buildingProps.name = name;
            buildingProps.uuid = uuid;

            buildingProps.expanded = false;
            buildingProps.visible = true;
            buildingProps.path = JSON.parse(JSON.stringify(platform.buildings.path));
            buildingProps.path.push(buildingProps.uuid);
            buildingProps.status = "UNKNOWN";
            buildingProps.children = ["devices"];
            buildingProps.type = "building";
            buildingProps.sortOrder = 0;          

            buildingProps.devices = {};
            buildingProps.devices.path = JSON.parse(JSON.stringify(buildingProps.path));
            buildingProps.devices.path.push("devices");
            buildingProps.devices.name = "Devices";
            buildingProps.devices.expanded = false;
            buildingProps.devices.visible = true;
            buildingProps.devices.children = [];
            buildingProps.devices.type = "type";
            buildingProps.devices.sortOrder = _devicesOrder;


            //TODO: add building points
            // buildingProps.children.push("points");
            // buildingProps.points = [];

            platform.buildings.children.push(buildingProps.uuid);
            platform.buildings[buildingProps.uuid] = buildingProps;            
        }

        return platform.buildings[uuid];
    }

    function insertDevices(platform, devices)
    {
        var devicesToInsert = JSON.parse(JSON.stringify(devices));

        var buildings = [];

        if (devicesToInsert.length > 0)
        {
            //Make a 2D array where each row is another level 
            // of devices and subdevices in the tree
            var nestedDevices = [];
            var level = 3;
            var deviceCount = 0;

            while (deviceCount < devicesToInsert.length)
            {
                var levelList = [];

                devicesToInsert.forEach(function (device) {

                    var deviceParts = device.path.split("/");

                    if (deviceParts.length === level)
                    {
                        levelList.push(device);
                        ++deviceCount;
                    }
                });

                if (levelList.length > 0)
                {
                    nestedDevices.push(levelList);
                }

                ++level;
            }
        }

        //Now we can add each row of devices, confident
        // that any parent devices will be added to the tree
        // before their subdevices
        nestedDevices.forEach(function (level, row) {

            level.forEach(function (device) {
                
                var pathParts = device.path.split("/");
                var buildingUuid = pathParts[0] + "_" + pathParts[1];
                var buildingName = pathParts[1];
                var legendInfo = pathParts[0] + " > " + buildingName;                

                var building = insertBuilding(platform, buildingUuid, buildingName);                

                insertDevice(device, building, legendInfo, row);

                var alreadyInTree = buildings.find(function (building) {
                    return building.uuid === buildingUuid;
                });

                if (!alreadyInTree) {
                    buildings.push(building);
                }

            });
        });

        buildings.forEach(function (blg) {
            
            var buildingHealth;

            blg.devices.children.forEach(function (device) {
                buildingHealth = checkStatuses(buildingHealth, blg.devices[device]);                
            });

            blg.devices.status = buildingHealth;            
            blg.status = buildingHealth;
        });

        
        var buildingsHealth;

        buildings.forEach(function (blg) {
            buildingsHealth = checkStatuses(buildingsHealth, blg);            
        });

        platform.buildings.status = buildingsHealth;
    }

    function insertDevice(device, building, legendInfo, row)
    {        
        switch (row)
        {
            case 0:
                //top-level devices

                var deviceParts = device.path.split("/");

                var deviceProps = {};
                deviceProps.name = deviceParts[deviceParts.length - 1];
                deviceProps.uuid = device.path.replace(/\//g, '_');
                deviceProps.expanded = false;
                deviceProps.visible = true;
                deviceProps.path = JSON.parse(JSON.stringify(building.devices.path));
                deviceProps.path.push(deviceProps.uuid);
                deviceProps.status = device.status.status.toUpperCase();
                deviceProps.context = device.status.context;
                deviceProps.children = [];
                deviceProps.type = "device";
                deviceProps.sortOrder = 0;

                deviceProps.legendInfo = legendInfo + " > " + deviceProps.name;

                checkForPoints(deviceProps, device);

                building.devices.children.push(deviceProps.uuid);
                building.devices[deviceProps.uuid] = deviceProps;

                break;
            default:
                //subdevices:
                var deviceParts = device.path.split("/");

                var subDeviceLevel = deviceParts.length - 1;

                // the top two spots in the device path are the campus and building,
                // so add 2 to the row and that should equal the subdevice's level
                if (subDeviceLevel !== row + 2)
                {
                    console.log("wrong level number");
                }
                else
                {
                    //Now find the subdevice's parent device by using the parts of its path
                    // to walk the tree
                    var parentPath = JSON.parse(JSON.stringify(building.path));
                    var parentDevice = building; // start at the building
                    var currentLevel = 2; // the level of the top-level devices

                    while (currentLevel < subDeviceLevel)
                    {
                        parentDevice = parentDevice.devices;
                        parentDevice = parentDevice[deviceParts[currentLevel]];
                        ++currentLevel;
                    }

                    //We're now at the parent device. If we haven't added any
                    // subdevices to it yet, initialize its "devices" child
                    if (parentDevice.children.indexOf("devices") < 0)
                    {
                        parentDevice.children.push("devices");

                        parentDevice.devices = {};
                        parentDevice.devices.path = JSON.parse(JSON.stringify(parentDevice.path));
                        parentDevice.devices.path.push("devices");
                        parentDevice.devices.name = "Devices";
                        parentDevice.devices.expanded = false;
                        parentDevice.devices.visible = true;
                        parentDevice.devices.children = [];
                        parentDevice.devices.type = "type";
                        parentDevice.devices.sortOrder = _devicesOrder;
                    }

                    var deviceProps = {};
                    deviceProps.name = deviceParts[subDeviceLevel];
                    deviceProps.uuid = device.path.replace(/ \/ /g, '_');
                    deviceProps.expanded = false;
                    deviceProps.visible = true;
                    deviceProps.path = JSON.parse(JSON.stringify(parentDevice.devices.path));
                    deviceProps.path.push(deviceProps.uuid);
                    // deviceProps.status = device.status.status.toUpperCase();
                    // deviceProps.context = device.status.context;
                    deviceProps.status = parentDevice.status;
                    deviceProps.context = parentDevice.context;
                    deviceProps.children = [];
                    deviceProps.type = "device";
                    deviceProps.sortOrder = 0;

                    deviceProps.legendInfo = parentDevice.legendInfo + " > " + deviceProps.name;

                    checkForPoints(deviceProps, device, building.name, campus);

                    parentDevice.devices.children.push(deviceProps.uuid);
                    parentDevice.devices[deviceProps.uuid] = deviceProps;  

                }
              
                break;
        }
    }

    function checkForPoints(item, data)
    {
        if (data.hasOwnProperty("points"))
        {
            if (item.children.indexOf("points") < 0)
            {
                item.children.push("points");

                item.points = {};
                item.points.path = JSON.parse(JSON.stringify(item.path));
                item.points.path.push("points");
                item.points.name = "Points";
                item.points.expanded = false;
                item.points.visible = true;
                item.points.status = item.status;
                item.points.children = [];
                item.points.type = "type";
                item.points.sortOrder = _pointsOrder;
            }

            data.points.forEach(function (pointName) {

                var pointPath = data.path + "/" + pointName;                
                var platformUuid = item.path[1];

                var pointProps = {}; 
                pointProps.topic = pointPath;  
                pointProps.name = pointName;
                pointProps.uuid = pointPath.replace(/\//g, '_');
                pointProps.expanded = false;
                pointProps.visible = true;
                pointProps.path = JSON.parse(JSON.stringify(item.points.path));
                pointProps.path.push(pointProps.uuid);
                pointProps.parentPath = item.legendInfo;
                pointProps.parentType = item.type;
                pointProps.parentUuid = platformUuid;
                pointProps.status = item.status;
                pointProps.context = item.context;
                pointProps.children = [];
                pointProps.type = "point";
                pointProps.sortOrder = 0;

                item.points.children.push(pointProps.uuid);
                item.points[pointProps.uuid] = pointProps;

            });
        }
    }

    function loadDevices(platform)
    {
        // var platform = _items["platforms"][action.platform.uuid];
        
        if (platform.devices)
        {
            if (platform.devices.length > 0)
            {
                // var agents = [];

                // platform.agents.forEach(function (agent)) {
                //     agents.push(agent);
                // }

                // platform.expanded = true;
                // platform.agents = {};
                // platform.agents.path = platform.path.slice(0);
                // platform.agents.path.push("agents");
                // platform.agents.name = "Agents";
                // platform.agents.expanded = false;
                // platform.agents.visible = true;
                // platform.agents.children = [];
                // platform.agents.type = "type";
                // platform.agents.sortOrder = _agentsOrder;

                // if (platform.children.indexOf("agents") < 0)
                // {
                //     platform.children.push("agents");
                // }

                // agents.forEach(function (agent)
                // {
                //     var agentProps = agent;
                //     agentProps.expanded = false;
                //     agentProps.visible = true;
                //     agentProps.path = platform.agents.path.slice(0);
                //     agentProps.path.push(agent.uuid);
                //     // agent.status = "GOOD";
                //     agentProps.children = [];
                //     agentProps.type = "agent";
                //     agentProps.sortOrder = 0;
                //     platform.agents.children.push(agent.uuid); 
                //     platform.agents[agent.uuid] = agentProps;
                // });

            }
            else
            {
                delete platform.devices;
            }
        }
    }

    function getParentPath(parent)
    {
        var path = parent.path;

        var pathParts = [];

        var item = _items;

        path.forEach(function (part) {
            item = item[part];
            if (_itemTypes.indexOf(part) < 0)
            {
                pathParts.push(item.name);
            } 
        });

        var pathStr = pathParts.join(" > ");

        return pathStr;
    }

    function checkStatuses(health, item)
    {
        if (typeof health === "undefined")
        {
            health = item.status;
        }
        else
        {
            switch (health)
            {
                case "UNKNOWN":

                    switch (item.status)
                    {
                        case "BAD":
                            health = "BAD";
                            break;
                    }
                    break;
                case "GOOD":
                    health = item.status;
            }
        }

        return health;
    }
});

module.exports = platformsPanelItemsStore;
