const db = require("../dbConfig.js");

module.exports = {
  findUserById,
  findUserByName,
  registerUser,
  getUsers
};

function findUserById(id) {
  return db("users")
    .where({ id })
    .first();
}

function findUserByName(username) {
  return db("users")
    .where({ username })
    .first();
}

async function registerUser(user) {
  const newUser = await db("users").insert(user);
  return findUserById(newUser[0]);
}

function getUsers() {
  return db("users");
}
