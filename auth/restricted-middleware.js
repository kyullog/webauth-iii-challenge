const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const db = require("../data/helpers/dbHelper.js");
const secret = require("../secrets/jwtSecret").jwtSecret;

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ error: "You shall not pass" });
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ error: "You shall not pass!" });
  }
};
