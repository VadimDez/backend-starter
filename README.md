Backend Starter
===

### Uses
* [IBM App ID](https://www.ibm.com/cloud/app-id)
* Express
* Nodemon
* Jest
* Docker
* Kubernetes


### Prepare

Environment variables

1. Create copy of `.env.example`
1. rename it to `.env`
1. Replace values in `.env` with yours

Install dependencies

```
npm i
```

### Start

Start running application on PORT defined in .env

```
npm start
```

### Testing

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

### Docker

To build image run:
```
bash build.sh
```
To run image:
```
bash run.sh
```

### CI/CD pipeline

* Build pipeline: simple
* Test pipeline: use custom dockerimage: `node:8` with:
```
npm i && npm test
```
* Deploy pipeline: simple (Don't forget to set runtime environment variables afterwards) 

### Run in production

```
npm start
```


### Kubernetes

##### Configs
Run:

```
ibmcloud ks cluster-config <cluster name>
```

Copy result, paste and hit enter


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
bx cr login
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
kubectl expose deployment/backend-deployment --type=NodePort --port=3000 --name=backend-service --target-port=3000
```

To find the port used on that worker node, examine your new service:
```
kubectl describe service backend-service
```
Take note of the "NodePort:" line as <nodeport>


Run `bx cs workers <name-of-cluster>`, and note the public IP as <public-IP>.

### Licence

[MIT](https://tldrlegal.com/license/mit-license) © [Vadym Yatsyuk](https://github.com/vadimdez)
