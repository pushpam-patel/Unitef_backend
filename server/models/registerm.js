const mongoose = require('mongoose');

let register= mongoose.model('register',{
    first_Name:{
        type: String
    },
    last_Name:{
        type: String
    },
    email:{
        type: String
    },
    aadhar:{
        type:Number
    },
    pnumber:{
        type:Number
    },
    password:{
        type: String
    },
    balance:{
        type: Number
    }

})

module.exports={ register }