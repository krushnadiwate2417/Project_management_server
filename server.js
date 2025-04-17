const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config({path : './config.env'});

mongoose.connect(process.env.MONGODB_STR)
.then(()=>{console.log('DataBase Connected');})
.catch((error)=>{console.log(error);})


app.listen(3000,()=>{
    console.log('server started at 3000')
})