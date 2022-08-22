/**
 * Created by Vadym Yatsyuk on 05.08.18
 */
const express = require('express');
const morgan = require("morgan");
const bodyParser = require('body-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const helmet = require('helmet');
const cors = require('cors');
const passport = require('passport');
const swaggerUi = require('swagger-ui-express');

const {
  logs
} = require("./vars");
const winston = require("./winston");
const routes = require('../api/routes/v1');
const APP_ID_STRATEGY = require('./passport').APP_ID_STRATEGY;
const {
  swaggerDocument
} = require('../swagger/swagger');

const app = express();

// request logging. dev: console | production: file
app.use(morgan(logs));

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// gzip compression
app.use(compress());

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it
app.use(methodOverride());

// secure apps by setting various HTTP headers
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// authentication
app.use(passport.initialize());
passport.use(APP_ID_STRATEGY);

// mount api v1 routes
app.use('/api/v1', routes);

// swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;