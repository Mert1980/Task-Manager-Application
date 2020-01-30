const express = require("express");
const router = new express.Router();
const auth = require("../middelware/authentication");
const User = require("../models/user");

router.post("/users", async (req, res) => {
  // creating new instance of User
  // console.log(req.body);
  const user = new User(req.body);
    try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({user, token});
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({user, token});
  } catch (e) {
    res.status(400).send();
  }
});

router.get("/users", async (req, res) => {
  // If we live the Object blank, it fetches all of the users from database
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/users/:id", async (req, res) => {
  console.log(req.params);
  // route parameters--> id can be named by anything else
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    if (!user) {
      // mongodb does not return an error if the ID does not match up in database
      return res.status(404).send(); // 404: not found
    }
    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

router.patch("/users/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "age"];
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }
  try {
    // findByIdAndUpdate method bypasses mongoose. It performs a direct operation on the database
    const user = await User.findById(req.params.id);

    // we use bracket notation to access a property dynamically
    updates.forEach(update => (user[update] = req.body[update]));

    await user.save();

    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.delete("/users/:id", async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  try {
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
