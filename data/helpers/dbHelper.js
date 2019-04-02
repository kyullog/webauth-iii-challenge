const db = require("../dbConfig.js");

module.exports = {
  findUser,
  registerUser
};

function findUser(id) {
  return db("users")
    .where({ id })
    .first();
}

async function registerUser(user) {
  const newUser = await db("users").insert(user);
  return findUser(newUser[0]);
}
