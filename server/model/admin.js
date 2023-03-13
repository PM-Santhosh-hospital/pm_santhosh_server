const mongoose = require('mongoose');
 

const Schema = mongoose.Schema

const adminSchema = new Schema({
    email:{
        type:String,
        trim:true,
        required:[true, 'is required'],
    },
    password:{
        type:String,
        trim:true,
        required:[true, 'is required'],
    },
   
    }, {timestamps:true})


module.exports = mongoose.model('Admin', adminSchema)