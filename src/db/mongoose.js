require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(
  `mongodb://127.0.0.1:27017/task-manager-api`,
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
const me = new User({
  // creating an instance of User model
  name: "Mert",
  age: 39
});
me.save() // save method doesn't take arguments
  .then(me => {
    console.log(me);
  })
  .catch(error => {
    console.log("Error:", error);
  });
