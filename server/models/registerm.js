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
        trim:true,
        minlength:12
    },
    pnumber:{
        type:Number,
        require:true,
        trim:true,
        minlength:10
    },

})

module.exports={ register }