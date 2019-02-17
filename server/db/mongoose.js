let mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://pvp_unite:pushpam0403@ds135255.mlab.com:35255/unite' || 'mongodb://localhost:27017/',{ useNewUrlParser: true })

module.exports={mongoose}