# Backend Starter

![workflow](https://github.com/VadimDez/backend-starter/actions/workflows/main.yml/badge.svg)

### Deploying to IBM Cloud

<p align="center">
    <a href="https://cloud.ibm.com/devops/setup/deploy?repository=https://github.com/VadimDez/backend-starter&branch=master">
    <img src="https://cloud.ibm.com/devops/setup/deploy/button_x2.png" alt="Deploy to IBM Cloud">
    </a>
</p>

## Uses

- [IBM App ID](https://www.ibm.com/cloud/app-id)
- Express
- Swagger, Swagger UI and Swagger Request Validation
- Nodemon
- Jest
- [Docker](#docker) _(Optional)_
- [Kubernetes](#kubernetes)_(Optional)_

## Prepare

Environment variables

- Create copy of `.env.example` and rename it to `.env`

```
cp .env.example .env
```

- Replace values in `.env` with yours

Install dependencies

```
npm i
```

## Start

Start running application on PORT defined in .env

```
npm start
```

## Testing

##### Unit testing

Run unit tests once

```
test:unit
```

Run unit tests with watcher

```
test:unit:watch
```

##### Integration testing

Run integration tests

```
test:integration
```

Run integration tests with watcher

```
test:integration:watch
```

## Swagger

Swagger OpenAPI file can be found in `swagger/swagger.yaml`

After starting the serve Swagger UI is available under <http://localhost:9000/api-docs>

## Validation

The validation is done with use of `swagger.yaml`. (see example <https://github.com/VadimDez/backend-starter/blob/master/api/routes/v1/index.js#L20>)

## Docker

To build image run:

```
bash build.sh
```

To run image:

```
bash run.sh
```

## CI/CD pipeline

- Build pipeline: simple
- Test pipeline: use custom dockerimage: `node:12` with:

```
npm i && npm test
```

- Deploy pipeline: simple (Don't forget to set runtime environment variables afterwards)

## Run in production

```
npm start
```

## Kubernetes

##### Configs

Run:

```
ibmcloud ks cluster-config <cluster name>
```

Copy result, paste and hit enter

##### Namespace
Create namespace if not created yet

```
ibmcloud cr namespace-add [my_namespace]
```

##### Build image

Build:

```
// docker build --tag registry.<region>.bluemix.net/<my_namespace>/<repo_name>:<tag> .
docker build --tag registry.eu-de.bluemix.net/<my_namespace>/backend-starter:1 .
```

Verify image is built:

```
docker images
```

Ensure you're logged in before pushing

```
ibmcloud cr login
```

Push to the registry:

```
docker push registry.eu-de.bluemix.net/<namespace>/backend-starter:1
```

Verify that the image was pushed successfully by running the following command.

```
ibmcloud cr image-list
```

Start by running your image as a deployment

```
kubectl run backend-deployment --image=registry.eu-de.bluemix.net/<namespace>/backend-starter:1
```

Expose

```
kubectl expose deployment/backend-deployment --type=NodePort --port=9000 --name=backend-service --target-port=9000
```

To find the port used on that worker node, examine your new service:

```
kubectl describe service backend-service
```

Take note of the "NodePort:" line as <nodeport>

Run `ibmcloud cs workers <name-of-cluster>`, and note the public IP as <public-IP>.

# Licence

[MIT](https://tldrlegal.com/license/mit-license) © [Vadym Yatsyuk](https://github.com/vadimdez)
