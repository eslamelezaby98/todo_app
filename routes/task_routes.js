const express = require('express')
const router = express.Router()
const Task = require('../models/task');

router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/tasks", async (request, response) => {
  try {
    const task = new Task(request.body);
    await task.save();
    response.status(200).json({ message: "Added successfuly!", task });
  } catch (err) {
    response.status(400).json({ error: err.message });
  }
});

router.delete('/tasks/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted successfuly!" });
  } catch (error) {
    res.status(400).json({ message: error.error });
  }
})

router.put('/tasks/:id', async (req, res) => {
  try {
    const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: "Updated successfuly!", updateTask });
  } catch (error) {
    res.status(400).json({ message: error.error });
  }
})


module.exports = router