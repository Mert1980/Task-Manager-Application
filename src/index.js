const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.env.port || 3000;

app.use(express.json()); // this configures express to automatically parse JSON into
// object so we can access it in our request handlers

app.post("/users", async (req, res) => {
  // creating new instance of User
  // console.log(req.body);
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.get("/users", async (req, res) => {
  // If we live the Object blank, it fetches all of the users from database
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
});

app.get("/users/:id", async (req, res) => {
  console.log(req.params);
  // route parameters--> id can be named by anything else
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    if (!user) {
      // mongodb does not return an error if the ID does not match up in database
      return res.status(404).send(); // 404: not found
    }
    await res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

app.post("/tasks", (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then(() => {
      res.status(404).send(task);
    })
    .catch(e => {
      res.status(400).send(e.message);
    });
});

app.get("/tasks", (req, res) => {
  Task.find({})
    .then(tasks => {
      res.send(tasks);
    })
    .catch(error => {
      res.status(500).send();
    });
});

app.get("/tasks/:id", (req, res) => {
  const _id = req.params.id;
  Task.findById(_id)
    .then(task => {
      if (!task) {
        return res.status(404).send(); // 404:not found
      }
      res.send(task);
    })
    .catch(error => {
      res.status(500).send();
    });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
