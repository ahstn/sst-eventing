#!/usr/bin/env python3

import argparse
import json
import boto3


def parse_args():
    parser = argparse.ArgumentParser(
        "sqs_publish", description="Publish to a SNS topic"
    )
    parser.add_argument("topic")
    return parser.parse_args()


def main():
    opts = parse_args()
    sns = boto3.client("sns")

    response = sns.publish(
        TopicArn=opts.topic,
        Message=json.dumps({"default": json.dumps({"foo": "bar"})}),
        MessageStructure="json",
    )
    print(f"Message Sent: {response}")


if __name__ == "__main__":
    main()
