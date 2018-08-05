/**
 * Created by Vadym Yatsyuk on 05.08.18
 */
const express = require('express');


const app = express();

// mount api v1 routes
app.get('/test', (req, res) => {
  res.status(200).json({
    status: 'ok'
  })
});

module.exports = app;