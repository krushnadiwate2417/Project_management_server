const express = require('express');
const userRoute = require('./src/routes/userRoutes');
const projectRoute = require('./src/routes/projectRoute');
const taskRoute = require('./src/routes/taskRoute');

const app = express();

app.use(express.json());
app.use('/api/v1/users',userRoute);
app.use('/api/v1/project',projectRoute);
app.use('/api/v1/task',taskRoute);


module.exports = app;