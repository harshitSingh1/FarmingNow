// server.js
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 5000;

// Start the server
const server = http.createServer(app);
server.listen(port,()=>{console.log('this app is running on '+port)});