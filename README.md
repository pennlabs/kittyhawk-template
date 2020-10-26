# Kittyhawk Template
This template repo contains everything needed to locally test kittyhawk configurations.

## Instructions
1. Run `npm install` to install all package dependencies, including Kittyhawk. 

2. Write the configuration in the `main.ts` file. A list of available constructs can be found in the Kittyhawk user guide and the Kittyhawk API documentation. 

3. Compile and synthesize the Kubernetes YAML using the command `npm run synth`. It it saved at `dist/kittyhawk.k8s.yaml`. 