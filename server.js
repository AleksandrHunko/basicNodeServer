'use strict';

const port = process.env.PORT || 8080;
const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});