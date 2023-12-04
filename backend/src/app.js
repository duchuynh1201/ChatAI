const express = require('express');
const routes = require('./routes');

const port = process.env.PORT || 3000;
const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/', routes);

module.exports = app;