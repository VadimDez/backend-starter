/**
 * Created by Vadym Yatsyuk on 05.08.18
 */
const express = require('express');
const morgan = require("morgan");

const { logs } = require("./vars");
const winston = require("./winston");
const routes = require('../api/routes/v1');

const app = express();

// request logging. dev: console | production: file
app.use(morgan(logs));

// mount api v1 routes
app.use('/v1', routes);

module.exports = app;