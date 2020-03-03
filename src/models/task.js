const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
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
    }, 
}, {
  timestamps:true
})

  const Task = mongoose.model("Task", taskSchema);
  module.exports = Task
  