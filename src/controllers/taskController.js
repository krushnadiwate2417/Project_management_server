const User = require('../models/authModel');
const Task = require('../models/taskModel');


exports.getAllTasks = async (req,res,next)=>{
    try {
        const {projectId} = req.query;
        const tasks = await Task.find().where('projectId').equals(projectId);
        res.status(200).json({
            status : 'success',
            tasks : {tasks} 
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : error.message,
            error
        })
    }
}

exports.getTask = async (req,res,next)=>{
    try {
        const {taskId} = req.params
        const task = await Task.findOne({_id : taskId});
        res.status(200).json({
            status : 'success',
            task : {task}
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : error.message,
            error
        })
    }
}

exports.addTask = async (req,res,next)=>{
    try {
        const task = await Task.create(req.body);
        res.status(200).json({
            status : 'success',
            task : {task}
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : error.message,
            error
        })
    }
}

exports.addComment = async (req,res,next) =>{
    try {
        const {taskId,comment,commentedBy} = req.body;
        const task = await Task.findOne({_id : taskId});
        if(!task){
            return res.status(404).json({
                status : 'fail',
                message : `Task with id ${taskId} is not present`
            })
        }
        const user = await User.findOne({_id : commentedBy});
        if(!user){
            return res.status(404).json({
                status : 'fail',
                message : `User with id ${commentedBy} is not present`
            })
        }
        task.comments = [{comment,commentTime : Date.now(),commentedBy : user.fullName},...task.comments];
        const updatedTask = await task.save();
        res.status(200).json({
            status : "success",
            updatedTask : {updatedTask}
        })

    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : error.message,
            error
        })
    }
}