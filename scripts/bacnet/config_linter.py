import argparse
import csv
from os.path import dirname, join
import os
import errno
import subprocess
import importlib

REQUIRED_HEADERS = {'Reference Point Name': {"type": "str"},
                    'Volttron Point Name': {"type": "str"},
                    'Units': {"type": "str"},
                    'Unit Details': {"type": "str"},
                    'BACnet Object Type': {"type": "str", "values": [
                        "binaryInput", "binaryOutput", "analogInput",
                        "analogOutput"]
                        },
                    'Property': {"type": "str", "values": ["presentValue"]},
                    'Writable': {"type": "str", "values": ["TRUE", "FALSE"]},
                    'Index': {"type": "int"}}

def check_type(value, typename):
	try:
        module = importlib.import_module('__builtin__')
        cls = getattr(module, typename)
        cls(value)
	except:
        return False
    return True


def main():
    arg_parser = argparse.ArgumentParser()
    arg_parser.add_argument("csv_file", type=argparse.FileType('rb'),
                            help="Input CSV file")
    args = arg_parser.parse_args()

    registry = csv.DictReader(args.csv_file)
    for header in REQUIRED_HEADERS:
        if header not in registry.fieldnames:
            print("Your file is missing or has a malformed header: {}".format(
                header))
    for row, i in enumerate(registry):
        for header, props in REQUIRED_HEADERS.items():
            if not check_type(row[header], props['type']):
            print("check input row: {}, {} not castable to correct type






if __name__ == "__main__":
    main()
