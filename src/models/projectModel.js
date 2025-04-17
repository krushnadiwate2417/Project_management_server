const mongoose = require('mongoose');


const projectModel = new mongoose.Schema({
    projectTitle : {
        type : String,
        required : [true,'Project Title is Required'],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    createdAt : Date
});

const Project = mongoose.model('projects',projectModel);
module.exports = Project;