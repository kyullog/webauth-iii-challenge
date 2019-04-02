const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const authRouter = require("../auth/authRouter.js");

const server = express();
server.use(cors(), helmet());
server.use(express.json());

server.use("/api/auth", authRouter);

module.exports = server;
