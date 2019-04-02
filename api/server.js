const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();
server.use(cors(), helmet());

module.exports = server;
