require("dotenv").config();
const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect(`mongodb://127.0.0.1:27017/task-manager-api`, {
  useUnifiedTopology: true,
  useCreateIndex: true // --> this allow as to access data quickly
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid!");
      }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error('Password can not contain "password"');
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      // there is not a build in validation in mongoose for numbers
      if (value < 0) {
        throw new Error("Age must be a positive number!");
      }
    }
  }
});

// const user = new User({
//   name: "   Mert   ",
//   email: "   MERTDEMIROK@GMAIL.com",
//   password: "    Password123      ",
//   age: 39
// });
// user
//   .save()
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error.message);
//   });

const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});
const myTasks = new Task({
  description: "    ToDo Application",
});

myTasks
  .save()
  .then(myTasks => {
    console.log(myTasks);
  })
  .catch(error => {
    console.log(error.message);
  });
