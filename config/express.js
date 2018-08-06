/**
 * Created by Vadym Yatsyuk on 05.08.18
 */
const express = require('express');

const routes = require('../api/routes/v1');

const app = express();

// mount api v1 routes
app.use('/v1', routes);

module.exports = app;