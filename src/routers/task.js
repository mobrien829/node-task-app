const express = require("express");
const router = new express.Router();
const Task = require("../models/task");

router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send();
  }
});

router.get("/tasks/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findById(_id);
    if (!task) {
      return res.status(404).send();
    }
    res.status(200).send(task);
  } catch (error) {
    res.send(500).send();
  }
});

router.post("/tasks", async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.patch("/tasks/:id", async (req, res) => {
  const _id = req.params.id;
  const allowedUpdates = ["description", "completed"];
  const updates = Object.keys(req.body);
  const validUpdate = updates.every(update => allowedUpdates.includes(update));

  if (!validUpdate) {
    return res.status(400).send({ error: "invalid update" });
  }

  try {
    const task = await Task.findById(_id);
    updates.forEach(update => (task[update] = req.body[update]));

    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/tasks/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const task = await Task.findByIdAndDelete(_id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
