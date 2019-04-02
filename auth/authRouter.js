const router = require("express").Router();
const db = require("../data/helpers/dbHelper.js");

router.post("/register", async (req, res) => {
  const user = req.body;
  try {
    const added = await db.registerUser(user);
    if (added) {
      res.status(201).json({ added, message: "User registered" });
    } else {
      res.status(400).json({ error: "Username already exists" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "There was a problem registering the user" });
  }
});

module.exports = router;
