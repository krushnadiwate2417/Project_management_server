const express = require('express');
const userRoute = require('./src/routes/userRoutes');
const projectRoute = require('./src/routes/projectRoute');
const taskRoute = require('./src/routes/taskRoute');
const cors = require('cors');

const app = express();
const allowedOrigins = ['http://localhost:5173','https://projectandtaskmanagement.netlify.app'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());
app.use('/api/v1/users',userRoute);
app.use('/api/v1/project',projectRoute);
app.use('/api/v1/task',taskRoute);

app.use('/',(req,res,next)=>{
    res.send({
        status : "success",
        error : false
    })
    next();
})



module.exports = app;