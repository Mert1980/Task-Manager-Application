const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../../src/models/user")

// Create a user ID to test read profile and delete account
const userOneId = new mongoose.Types.ObjectId();

// Create a new user to test other test cases (login, update etc)
const userOne = {
  _id: userOneId,
  name: "Yigit",
  email: "example@gmail.com",
  password: "Green12345",
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET),
    },
  ],
};

const setupDatabase = async ()=>{
    await User.deleteMany();
    await new User(userOne).save();
}

module.exports = {
    userOne,
    userOneId,
    setupDatabase
}