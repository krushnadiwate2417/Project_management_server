const express = require('express');
const projectContoller = require('../controllers/projectController');

const projectRouter = express.Router();

projectRouter.route('/addProject').post(projectContoller.addProject);
projectRouter.route('/getProjects').get(projectContoller.getProjects);

module.exports = projectRouter;

