const mongoose = require("mongoose");

const Task = mongoose.model("Task", {
    description: {
      type: String,
      required: true,
      trim: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    owner: {
      type:mongoose.Schema.Types.ObjectId,
      required:true,
      ref:'User' //--> User is the model name that we want to make a relationship btwn Task and User models
    }
  });

  module.exports = Task
  