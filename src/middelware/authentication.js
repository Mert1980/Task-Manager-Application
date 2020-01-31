const jwt = require("jsonwebtoken"); // to validate the token being provided
const User = require("../models/user"); // to find token in database

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    console.log(token);
  } catch (e) {
    res.status(401).send({ error: "Please authenticate!" });
  }
};

module.exports = auth;
