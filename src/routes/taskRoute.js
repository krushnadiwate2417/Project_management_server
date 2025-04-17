const express = require('express');
const taskController = require('../controllers/taskController');
const taskRouter = express.Router();

taskRouter.route('/showAllTasks').get(taskController.getAllTasks);

taskRouter.route('/addTask').post(taskController.addTask);

taskRouter.route('/showTask/:taskId').get(taskController.getTask);

taskRouter.route('/addComment').patch(taskController.addComment);

module.exports = taskRouter;