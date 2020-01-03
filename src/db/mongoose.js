require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(
  `mongodb://Mert:${process.env.MONGODB_PSWD}@127.0.0.1:27017/task-manager-api`,
  {
    useUnifiedTopology: true,
    useCreateIndex: true // --> this allow as to access data quickly
  }
);
const User = mongoose.model("User", {
  // --> User is a constractor function for User model
  name: {
    type: String
  },
  age: {
    type: Number
  }
});
