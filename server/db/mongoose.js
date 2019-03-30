let mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://pushpam:pushpam1009@ds145895.mlab.com:45895/pushpam-unite')

module.exports={mongoose}