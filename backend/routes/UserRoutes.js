import express from 'express';
import { addTask, getTasks, deleteTask } from "../controllers/UserController.js";

const router = express.Router();

// Route to get all tasks
router.get("/tasks", getTasks);

// Route to add a new task
router.post("/tasks", addTask);

// Route to delete a task by ID
router.delete("/tasks/:id", deleteTask);

export default router;
