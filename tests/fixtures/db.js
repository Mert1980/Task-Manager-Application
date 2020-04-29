const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../../src/models/user")
const Task = require("../../src/models/task")

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

// Create a user ID to test task endpoints
const userTwoId = new mongoose.Types.ObjectId();

// Create a new user to test other test cases (login, update etc)
const userTwo = {
  _id: userTwoId,
  name: "Almira",
  email: "example2@gmail.com",
  password: "Green12345",
  tokens: [
    {
      token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET),
    },
  ],
};

const taskOne = {
  _id : new mongoose.Types.ObjectId(),
  description: "First Task",
  completed : false,
  owner: userOne._id
}

const taskTwo = {
  _id : new mongoose.Types.ObjectId(),
  description: "Second Task",
  completed : true,
  owner: userOne._id
}

const taskThree = {
  _id : new mongoose.Types.ObjectId(),
  description: "Third Task",
  completed : true,
  owner: userTwo._id
}

const setupDatabase = async ()=>{
    await User.deleteMany();
    await Task.deleteMany();
    await new User(userOne).save();
    await new User(userTwo).save();
    await new Task(taskOne).save();
    await new Task(taskTwo).save();
    await new Task(taskThree).save();
}

module.exports = {
    userOne,
    userOneId,
    setupDatabase
}