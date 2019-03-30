let mongoose = require('mongoose')

let User = mongoose.model('User', {
    first_Name:{
        type:String
    },
    last_Name:{
        type:String
    },
    email:{
        type:String
    },
    aadhar:{
        type:Number
    },
    pnumber:{
        type:Number
    },
    password:{
        type:String
    },
    balance:{
        type:Number
    }
})

module.exports = { User }