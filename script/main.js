'use strict'

const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.listen(PORT, (req, res) => {
  console.log(`App is running on: ${PORT}`);
});

app.use(express.static('assests'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});
