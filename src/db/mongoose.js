require("dotenv").config();
const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect(`mongodb://127.0.0.1:27017/task-manager-api`, {
  useUnifiedTopology: true,
  useCreateIndex: true // --> this allow as to access data quickly
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
