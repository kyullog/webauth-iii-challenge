const router = require("express").Router();

const restricted = require("../auth/restricted-middleware.js");
const db = require("../data/helpers/dbHelper.js");

router.get("/", restricted, async (req, res) => {
  try {
    const users = await db.getUsers();
    if (users) {
      res.status(200).json(users);
    } else {
      res.status(404).json({ message: "no users found" });
    }
  } catch (err) {
    res.status(500).json({ error: "There was a problem getting users" });
  }
});

module.exports = router;
