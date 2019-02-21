const mongoose = require ('mongoose');

let driver=mongoose.model('driver',{
    from:{
        type: String,
        require:true
    },
    to:{
        type: String,
        require:true
    },
    cnum:{
        type: String,
        require:true,
        trim:true, 
        minlentg:8,
    },
    cname:{
        type: String,
        require:true,
        trim:true,  
    },
    time:{
        type: String,
        require:true
    },
    maxs:{
        type: Number,
        trim:true
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

module.exports = {driver}