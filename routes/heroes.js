const express = require('express');
const app = express();
const heroes = require('../heroes.js');

app.get('/', (req, res) => {
  res.json(heroes);
});

module.exports = app;
