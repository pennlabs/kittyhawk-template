import { Application, synth, CronJob } from '@pennlabs/kittyhawk';
import { Construct } from 'constructs'; 

export function buildChart(scope: Construct) {

  const release_name = "project-name";

  // Sample Application (Replace this with your actual configuration)
  new Application(scope, `${release_name}-webapp`, {
      image: 'pennlabs/project-image:latest',
      port: 80
  });

  // Sample Cronjob
  new CronJob(scope, `${release_name}-cronjob`, {
        schedule: "0 8 * * *",
        image: "pennlabs/cronjob:latest",
        secret: "my-secret",
        cmd: ["python", "manage.py", "launch"],
  });
}

// Synthesizes the chart (run "npm run build")
synth(buildChart);


