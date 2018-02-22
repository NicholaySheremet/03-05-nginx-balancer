'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3001;
const clientFilePath = path.join(__dirname, './client.html');

http.createServer((req, res) => {
  console.log(`http://localhost:${ PORT } requested`);
  
  res.writeHead(200);

  fs
    .createReadStream(clientFilePath)
    .pipe(res);
    
}).listen(PORT);
