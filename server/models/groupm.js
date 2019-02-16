const mongoose = require('mongoose');

let group= mongoose.model('group',{
    namep:{
        type: String,
        required: true,
        trim:true,
        minlength:1
    },
    pnumberp:{
        type: Number,
        required:true,
        trim:true,
        minlength:10
    },
    emaild:{
        type: String,
        require:true,
        trim:true,
        minlength:5
    },
    named:{
        type:String,
        require:true,
        trim:true,
        minlength:1
    },
    pnumberd:{
        type:Number,
        require:true,
        trim:true,
        minlength:10
    },

})

module.exports={ group }