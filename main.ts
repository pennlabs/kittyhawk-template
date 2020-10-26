import { Application, synthChart } from '@pennlabs/kittyhawk';
import { Construct } from 'constructs';

export function buildChart(scope: Construct) {

  const release_name = "project-name";

  // Sample Application (Replace this with your actual configuration)
  new Application(scope, `${release_name}-webapp`, {
      image: 'pennlabs/project-image:latest',
      port: 80
  });
}

synthChart(buildChart);


