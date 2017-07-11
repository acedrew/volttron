import argparse
import csv
import importlib

REQUIRED_HEADERS = {'Reference Point Name': {"type": "str"},
                    'Volttron Point Name': {"type": "str"},
                    'Units': {"type": "str"},
                    'Unit Details': {"type": "str"},
                    'BACnet Object Type': {"type": "str", "values": [
                        "binaryInput", "binaryOutput", "analogInput",
                        "analogOutput", "binaryValue", "analogValue"]
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
    caught = False
    arg_parser = argparse.ArgumentParser()
    arg_parser.add_argument("csv_file", type=argparse.FileType('rb'),
                            help="Input CSV file")
    args = arg_parser.parse_args()

    registry = csv.DictReader(args.csv_file)
    for header in REQUIRED_HEADERS:
        if header not in registry.fieldnames:
            print("Your file is missing or has a malformed header: {}".format(
                header))
            caught = True
    for i, row in enumerate(registry):
        for header, props in REQUIRED_HEADERS.items():
            try:
                if not check_type(row[header], props['type']):
                    print("check input row: {}, {} not castable to correct"
                          " type".format(i, header))
                    caught = True
                    pass
                if "values" in props and not row[header] in props["values"]:
                    print("Value of {} must be one of {} found {} on "
                          "line {}".format(header, ", ".join(props['values']),
                                           row[header], i + 2))
                    caught = True
            except:
                continue
    if not caught:
        print("No errors detected")


if __name__ == "__main__":
    main()
