require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(
  `mongodb://Mert:${process.env.MONGODB_PSWD}@127.0.0.1:27017/task-manager-api`,
  {
    useUnifiedTopology: true,
    useCreateIndex: true // --> this allow as to access data quickly
  }
);
