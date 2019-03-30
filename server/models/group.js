let mongoose = require('mongoose')

let Group = mongoose.model('Group', {
    namep:{
        type:String
    },
    pnumberp:{
        type:Number
    },
    emaild:{
        type:String
    },
    pnumberd:{
        type:Number
    },
    named:{
        type:String
    }

})

module.exports = { Group }