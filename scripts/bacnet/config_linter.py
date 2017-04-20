import argparse
import csv
from os.path import dirname, join
import os
import errno
import subprocess

REQUIRED_HEADERS = ['Reference Point Name', 'Volttron Point Name', 'Units',
                    'Unit Details', 'BACnet Object Type', 'Property',
                    'Writable', 'Index', 'Write Priority', 'Notes']


def main():
    arg_parser = argparse.ArgumentParser()
    arg_parser.add_argument("csv_file", type=argparse.FileType('rb'),
                            help="Input CSV file")
    arg_parser.add_argument("--use-proxy", action="store_true",
                            help="Use proxy_grab_bacnet_config.py to grab configurations.")
    arg_parser.add_argument("--out-directory",
                            help="Output directory.", default=".")

    args = arg_parser.parse_args()

    registry = csv.DictReader(args.csv_file)
    for header in REQUIRED_HEADERS:H
        if header not in registry:
            print("Your file is missing or has a malforme




if __name__ == "__main__":
    main()
