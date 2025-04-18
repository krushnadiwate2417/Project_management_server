const Project = require('../models/projectModel');

exports.addProject = async (req,res,next)=>{
    try {
        const project = await Project.create(req.body);
        res.status(201).json({
            status : 'success',
            project
        })
    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            status : 'fail',
            error : error,
            message : error.message
        })
    }
}

exports.getProjects = async (req,res,next)=>{
    try {
        const projects = await Project.find();
        res.status(200).json({
            status : 'success',
            projects
        })
    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            status : 'fail',
            error : error,
            message : error.message
        })
    }
}