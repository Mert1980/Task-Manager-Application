// require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser:true,
  useUnifiedTopology: true,
  useFindAndModify:false,
  useCreateIndex: true // --> this allow as to access data quickly
});


