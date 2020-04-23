// require("dotenv").config();
// const path = require('path');
// require('dotenv').config({path: path.resolve(process.cwd(), 'config', '.env'), debug: true});
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser:true,
  useUnifiedTopology: true,
  useFindAndModify:false,
  useCreateIndex: true // --> this allow as to access data quickly
}, console.log("Successfuly connected!"));


