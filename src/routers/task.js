const express = require('express');
const auth = require('../middleware/authentication')
const router = new express.Router();
const Task = require("../models/task");

router.post("/tasks", auth, async (req, res) => {
    // const task = new Task(req.body);
    const task = new Task({
      ...req.body,
      owner: req.user._id
    })
    try {
      await task.save();
      res.status(201).send(task);
    } catch (e) {
      res.status(400).send(e.message);
    }
  });

  // GET /tasks?completed:true
  // GET /tasks?limit=10&skip=10 --> this skips the 1st page and returns the 2nd page
  // --> limit allows us to limit the number of results that we get back for any given request
  // When the user provides a number in query it is gonna be always a string. So we have to parse it.
  router.get("/tasks", auth, async (req, res) => {
    const match = {}
    // console.log(req.query) --> { completed: 'true' }
    if(req.query.completed){
      match.completed = req.query.completed === 'true'
    }

    try {
      // const tasks = await Task.find({owner:req.user._id}); --> 1st way
      await req.user.populate({
        path:'tasks',
        match,
        options: {
          limit:parseInt(req.query.limit),
          skip: parseInt(req.query.skip)
        }
      }).execPopulate()
      res.send(req.user.tasks);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });
 
router.get("/tasks/:id", auth, async (req, res) => {
    const _id = req.params.id;
    try {
      // const task = await Task.findById(_id);
      const task = await Task.findOne({_id, owner:req.user._id}) // checks the ID of the task and ID of the user at the same time
      if (!task) {
        return res.status(404).send(); // 404:not found
      }
      res.send(task);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });
  
router.patch("/tasks/:id", auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["completed", "description"];
    const isValidOperation = updates.every(update =>
      allowedUpdates.includes(update)
    );
  
    if (!isValidOperation) {
      return res.status(400).send({ Error: "Invalid updates!" });
    }
  
    try {
      // const task = await Task.findById(req.params.id);
      const task = await Task.findOne({_id:req.params.id, owner:req.user._id}) 

      if (!task) {
        res.status(404).send();
      }

      updates.forEach((update)=> task[update] = req.body[update]);
      await task.save()
           
      res.send(task);
    } catch (e) {
      res.status(400).send(e.message);
    }
  });
  
router.delete("/tasks/:id", auth, async (req, res) => {
    const task = await Task.findOneAndDelete({_id:req.params.id, owner:req.user._id});
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