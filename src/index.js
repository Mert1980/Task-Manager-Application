const express = require("express");
require("./db/mongoose");
const User = require("./models/user");

const app = express();
const port = process.env.port || 3000;

app.use(express.json()); // this configures express to automatically parse JSON into
// object so we can access it in our request handlers

app.post("/users", (req, res) => {
  // we are sending JSON data via request body
  console.log(req.body);
  res.send("testing!");
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
