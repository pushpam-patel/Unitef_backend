const mongoose = require('mongoose');

let login=mongoose.model('login',{
    email:{
        type: String,
        require:true,
        trim:true,
        minlength:5
    }
})

module.exports={ login }