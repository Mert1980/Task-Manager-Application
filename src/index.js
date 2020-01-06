const express = require("express");
require("./db/mongoose");
const User = require("./models/user");

const app = express();
const port = process.env.port || 3000;

app.use(express.json()); // this configures express to automatically parse JSON into
// object so we can access it in our request handlers

app.post("/users", (req, res) => {
  // creating new instance of User
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.send(user);
    })
    .catch(error => {});
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
