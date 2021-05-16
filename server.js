'use strict';

const express = require('express');
const app = express();
const errorHandler = require('./error-handlers/500');
const notFoundHandler = require('./error-handlers/404');

app.get('/', (req, res, next) => {
  res.send('welcome to server.js');
});

app.get('/bad', (req, res, next) => {
  let error = new Error('Something went wrong ...');
  error.statusCode = 500;
  throw error;
});

app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
  app.listen(port, () => {
    console.log(`The app is up on ${port}`);
  });
}

module.exports = {
  app: app,
  start: start,
};
