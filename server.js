'use strict';

const express = require('express');
const app = express();

const PORT = 8080;

app.listen(PORT, (req, res) => {
  console.log(`App is running on: ${PORT}`);
});

app.use(express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname, '/assets/index.html');
});
