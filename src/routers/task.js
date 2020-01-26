const express = require('express');
const router = new express.Router();
const Task = require("../models/task");

router.post("/tasks", async (req, res) => {
    const task = new Task(req.body);
    try {
      await task.save();
      res.status(201).send(task);
    } catch (e) {
      res.status(400).send(e.message);
    }
  });
  
router.get("/tasks", async (req, res) => {
    try {
      const tasks = await Task.find({});
      res.send(tasks);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });
  
router.get("/tasks/:id", async (req, res) => {
    const _id = req.params.id;
    try {
      const task = await Task.findById(_id);
      if (!task) {
        return res.status(404).send(); // 404:not found
      }
      res.send(task);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });
  
router.patch("/tasks/:id", async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["completed", "description"];
    const isValidOperation = updates.every(update =>
      allowedUpdates.includes(update)
    );
  
    if (!isValidOperation) {
      return res.status(400).send({ Error: "Invalid updates!" });
    }
  
    try {
      const task = await Task.findById(req.params.id);

      updates.forEach((update)=> task[update] = req.body[update]);
      await task.save()
      
      if (!task) {
        res.status(404).send();
      }
      res.send(task);
    } catch (e) {
      res.status(400).send(e.message);
    }
  });
  
router.delete("/tasks/:id", async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    try {
      if (!task) {
        return res.status(404).send();
      }
      res.send(task);
    } catch (e) {
      res.status(500).send();
    }
  });
  
  module.exports = router;