let mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://pushpam:pushpam1009@ds135255.mlab.com:35255/unite' || 'mongodb://localhost:27017/Unite')

module.exports={mongoose}