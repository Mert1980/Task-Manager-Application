const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

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
      res.status(201).send(user);
    })
    .catch(e => {
      res.status(400).send(e.message);
    });
});

app.get("/users", (req, res)=>{
  // If we live the Object blank, it fetches all of the users from database
  User.find({}).then((users)=>{
    res.send(users)
  }).catch((e)=>{
    res.status(500).send()
  })
})

app.get("/users/:id", (req, res)=>{ // route parameters--> id can be named by anything else
  console.log(req.params);
}) 

app.post("/tasks", (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then(() => {
      res.status(201).send(task);
    })
    .catch(e => {
      res.status(400).send(e.message);
    });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
