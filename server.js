const express = require('express');

const api = express();

api.get('/', (request, response) => {
  return response.send('Hello World!');
});

api.listen('3334', console.log("Second API on port 3334.."));