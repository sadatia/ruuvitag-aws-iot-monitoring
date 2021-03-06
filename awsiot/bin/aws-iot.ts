#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsIotStack } from '../lib/aws-iot-stack';
import { AwsIotDashboardStack } from '../lib/aws-iot-dashboard-stack';

const app = new cdk.App();

const props = {
  thingName: 'RaspberryPiZeroW',
  iotTopicPrefix: 'ruuvitag',
  env: {
    region: 'eu-west-1'
  },
  ruuviTagIds: ['d2285bb103f7']
}

new AwsIotStack(app, 'AwsIotStack', props);
new AwsIotDashboardStack(app, 'AwsIotDashboardStack', props);
