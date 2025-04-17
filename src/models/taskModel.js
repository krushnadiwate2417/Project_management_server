const mongoose = require('mongoose');

const taskModel = new mongoose.Schema({
    projectId : {
        type : String,
        required : [true,'Project Id is required']
    },
    taskTitle : {
        type : String,
        required : [true,'Task title is required']
    },
    taskDescription : {
        type : String,
        required : [true,'Task Description is required']
    },
    assignedTo : {
        type : String,
        required : [true,'Assigned To is required']
    },
    priority : {
        type : String,
        required : [true,'Priority is required']
    },
    comments : [String],
    createdAt : Date
})

const Task = mongoose.model('tasks',taskModel);
module.exports = Task;