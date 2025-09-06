const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type: String,
        require:true
    },
    email:{
        type:email,
        require:true,
        unique: true
    },
    password:{
        type: password,
        require: true

      }
});

const Usermodel = mongoose.model('user', UserSchema);
module.exports= Usermodel;