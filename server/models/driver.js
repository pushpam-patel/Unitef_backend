let mongoose = require('mongoose')

let Driver = mongoose.model('Driver', {
    name:{
        type:String
    },
    pnumber:{
        type:Number
    },
    from:{
        type:String
    },
    to:{
        type:String
    },
    cnum:{
        type:String
    },
    cname:{
        type:String
    },
    time:{
        type:String
    },
    maxs:{
        type:Number
    },
    latitude:{
        type:Number
    },
    longitude:{
        type:Number
    }

})

module.exports = { Driver }