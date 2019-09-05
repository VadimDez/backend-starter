const {
  OpenApiValidator
} = require("express-openapi-validate");
const YAML = require('yamljs');
const path = require('path');

const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yaml'));
const validator = new OpenApiValidator(swaggerDocument);

module.exports = {
  swaggerDocument,
  validator
};