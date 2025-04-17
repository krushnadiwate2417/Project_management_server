const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userModel = new mongoose.Schema({
    fullName : {
        type : String,
        required : [true,'Full Name is Required'],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password :{
        type : String,
        required : [true, 'Password is Required'],
        select : false
    },
    isAdmin : {
        type : Boolean,
        default : false
    }

});

userModel.pre("save",async function (next) {
    this.password = await bcrypt.hash(this.password,12);
    next();
})

userModel.methods.comparePassInDb = async function (pswd, pswdDB) {
    return await bcrypt.compare(pswd, pswdDB);
  };

const User = mongoose.model('users',userModel);

module.exports = User;