//require("dotenv").config();
// if(process.env.NODE_ENV !== 'Production') {
//     require('dotenv').load()
// }
const http = require('http');
const app = require('./src/app');

const server = http.createServer(app);
server.listen(process.env.APP_PORT)