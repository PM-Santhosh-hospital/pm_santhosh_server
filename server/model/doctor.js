const mongoose = require('mongoose');

 const doctor = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true, 'Name is required'],
    },
    image:{
        type:String,
        trim:true,
        required:[true, 'Image is required'],
    },
    specialities:{
        type:String,
        trim:true,
        required:[true, 'Specialities is required']
    },
    qualification:{
        type:String,
        trim:true,
        required:[true, 'is required']
    },
    specialization:{
        type:String,
        trim:true,
        required:[true, 'is required']
    },
    experience:{
        type:String,
        trim:true,
        required:[true, 'is required']
    },
    license_number:{
        type:String,
        trim:true,
        required:[true, 'is required']
    },
    about:{
        type:String,
        trim:true,
        required:[true, 'is required'],
    },

}, {timestamps:true})

module.exports = mongoose.model('doctor', doctor)