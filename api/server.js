const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const authRouter = require("../auth/authRouter.js");
const userRouter = require("../users/userRouter.js");

const server = express();
server.use(cors(), helmet());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);

module.exports = server;
