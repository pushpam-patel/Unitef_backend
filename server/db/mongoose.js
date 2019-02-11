let mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://Tushar:tusharj045@ds221292.mlab.com:21292/all-mart' || 'mongodb://localhost:27017/TodoApp')

module.exports={mongoose}