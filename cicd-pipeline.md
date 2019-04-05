# CI/CD Pipeline
Configure Pipeline in your IBM Cloud as following:

### Test
```
npm i && npm test
```

### Deploy
```
#!/bin/bash
# Push app
cf push $CF_APP
# Export app name and URL for use in later Pipeline jobs
export CF_APP_NAME="$CF_APP"
export APP_URL=http://$(cf app $CF_APP_NAME | grep -e urls: -e routes: | awk '{print $2}')
# View logs
#cf logs "${CF_APP}" --recent
```
