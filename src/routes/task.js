const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/task");

const taskController = new TaskController();

router.post("/task", taskController.createTask);
router.get("/task/:id?", taskController.getTask);
router.patch("/task/:id", taskController.editTask);
router.delete("/task/:id", taskController.deleteTask);

module.exports = router;