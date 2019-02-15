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
        require:true
    },
    maxs:{
        type: Number,
        trim:true
    },
    
})

module.exports = {driver}