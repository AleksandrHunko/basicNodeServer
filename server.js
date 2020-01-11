'use strict';

const port = process.env.PORT || 8080;
const express = require('express');

// content of index.js
const http = require('http')

const requestHandler = (request, response) => {
  console.log('connection to:' + request.url)
  response.end(url+'ty')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})