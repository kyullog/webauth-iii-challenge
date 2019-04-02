const router = require("express").Router();
const bcrypt = require("bcryptjs");
const db = require("../data/helpers/dbHelper.js");

router.post("/register", async (req, res) => {
  const user = req.body;
  try {
    const hashword = bcrypt.hashSync(user.password, 12);
    user.password = hashword;
    const added = await db.registerUser(user);
    if (added) {
      res.status(201).json(added);
    } else {
      res.status(400).json({ error: "Username already exists" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "There was a problem registering the user" });
  }
});

module.exports = router;
