require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(`mongodb://127.0.0.1:27017/task-manager-api`, {
  useUnifiedTopology: true,
  useCreateIndex: true // --> this allow as to access data quickly
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
    validate(value) { // there is not a build in validation in mongoose for numbers
      if (value < 0) {
        throw new Error("Age must be a positive number!");
      }
    }
  }
});

const user = new User({
  name: "Kaan",
  age: -1
});
user
  .save()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error.message);
  });

const Task = mongoose.model("Task", {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
});
const myTasks = new Task({
  description: "Task Manager Application",
  completed: false
});
// myTasks
//   .save()
//   .then(myTasks => {
//     console.log(myTasks);
//   })
//   .catch(error => {
//     console.log(error);
//   });
