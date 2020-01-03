require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(`mongodb://127.0.0.1:27017/task-manager-api`, {
  useUnifiedTopology: true,
  useCreateIndex: true // --> this allow as to access data quickly
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
myTasks
  .save()
  .then(myTasks => {
    console.log(myTasks);
  })
  .catch(error => {
    console.log(error);
  });
