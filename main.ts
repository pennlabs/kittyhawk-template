import { Application, synth, CronJob } from '@pennlabs/kittyhawk';
import { Construct } from 'constructs'; 

export function buildChart(scope: Construct) {

  const release_name = "project-name";
  const tag = process.env.IMAGE_TAG;

  // Sample Application (Replace this with your actual configuration)
  new Application(scope, `${release_name}-webapp`, {
      image: 'pennlabs/project-image',
      tag: tag,
      port: 80
  });

  // Sample Cronjob
  new CronJob(scope, `${release_name}-cronjob`, {
        schedule: "0 8 * * *",
        image: "pennlabs/cronjob",
        tag: tag,
        secret: "my-secret",
        cmd: ["python", "manage.py", "launch"],
  });
}

// Synthesizes the chart (run "npm run build")
synth(buildChart);


