import { Application, synth, CronJob } from '@pennlabs/kittyhawk';
import { Construct } from 'constructs'; 

export function buildChart(scope: Construct) {


  // Sample Application (Replace this with your actual configuration)
  new Application(scope, 'webapp', {
      image: 'pennlabs/project-image',
      port: 80
  });

  // Sample Cronjob
  new CronJob(scope, 'cronjob', {
        schedule: "0 8 * * *",
        image: "pennlabs/cronjob-image",
        secret: "my-secret",
        cmd: ["python", "manage.py", "launch"],
  });
}

// Synthesizes the chart (run "npm run build")
synth(buildChart);


