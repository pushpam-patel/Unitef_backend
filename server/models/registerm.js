const mongoose = require('mongoose');

let register= mongoose.model('register',{
    first_Name:{
        type: String,
        required: true,
        trim:true,
        minlength:1
    },
    last_Name:{
        type: String,
        required:true,
        trim:true,
        minlength:1
    },
    email:{
        type: String,
        require:true,
        trim:true,
        minlength:5
    },
    aadhar:{
        type:Number,
        require:true,
        minlength:12
    },
    pnumber:{
        type:Number,
        require:true,
        minlength:10
    },
    password:{
        type: String,
        require:true,
        minlength:5
    },
    balance:{
        type: Number
    }

})

module.exports={ register }