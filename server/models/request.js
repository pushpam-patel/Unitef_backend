let mongoose = require('mongoose')

let Request = mongoose.model('Request', {
    namep:{
        type:String
    },
    named:{
        type:String
    },
    pnumberp:{
        type:Number
    },
    pnumberd:{
        type:Number
    }
})

module.exports = { Request }