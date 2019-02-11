const path = require('path');
const express = require ('express');
let bodyParser = require('body-parser');
let { ObjectID } = require('mongodb');

let { mongoose } = require('./db/mongoose.js');

const pubilcPath = path.join(__dirname,'../Frontend')

let app = express();
let port = process.env.PORT || 3000;

app.use(express.static(pubilcPath));

app.listen(port,()=>{
    console.log(port)
})

