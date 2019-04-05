const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const db = require("../data/helpers/dbHelper.js");
const secret =
  require("../secrets/jwtSecret.js").jwtSecret || "not secure secret";

router.post("/register", async (req, res) => {
  const user = req.body;
  try {
    const hashword = bcrypt.hashSync(user.password, 12);
    user.password = hashword;
    const added = await db.registerUser(user);
    if (added) {
      console.log(added);
      const token = createToken(added);
      res.status(201).json({ token });
    } else {
      res.status(400).json({ error: "Username already exists" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "There was a problem registering the user" });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const checkUser = await db.findUserByName(username);
    if (checkUser && bcrypt.compareSync(password, checkUser.password)) {
      const token = createToken(checkUser);
      res.status(200).json({ message: `Welcome ${username}`, token });
    } else {
      res.status(400).json({ error: "Please provide proper credentials" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "There was a problem logging you in" });
  }
});

function createToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    department: user.department
  };

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secret, options);
}

module.exports = router;
