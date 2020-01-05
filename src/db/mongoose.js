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
    type: Number
  }
});

const user = new User({
  name: "Kaan",
  // age: 39
});
user
  .save()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error.name, error._message);
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
