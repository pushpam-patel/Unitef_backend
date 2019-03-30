let mongoose = require('mongoose')

let Passenger = mongoose.model('Passenger', {
    name:{
        type:String
    },
    from:{
        type:String
    },
    to:{
        type:String
    },
    time:{
        type:String
    },
    pnumber:{
        type:Number
    },
    latitude:{
        type:Number
    },
    longitude:{
        type:Number
    }

})

module.exports = { Passenger }