const mongoose = require ('mongoose');

let passenger = mongoose.model('passenger',{
    from:{
        type: String,
        require:true,    
    },
    to:{
        type: String,
        require:true
    },
    time:{
        type: String,
        require:true
    },
    name:{
        type: String,
        minlength:1
    },
    pnumber:{
        type:Number,
        require:true,
        minlength:10
    },
    latitude:{
        type:Number
    },
    longitude:{
        type:Number
    }
})

module.exports={passenger}