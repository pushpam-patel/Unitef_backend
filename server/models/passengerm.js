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
})

module.exports={passenger}