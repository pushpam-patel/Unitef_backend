const path = require('path');
const express = require ('express');
let bodyParser = require('body-parser');
//let { ObjectID } = require('mongodb');
var TeleSignSDK = require('telesignsdk');

let { register } = require('./models/registerm.js');
let { login } = require('./models/loginm.js');
let { driver } = require('./models/driverm.js');
let { passenger } = require('./models/passengerm.js')

//let { mongoose } = require('./db/mongoose.js');

const pubilcPath = path.join(__dirname,'../Frontend')

let app = express();
let port = process.env.PORT || 3000;

const customerId = "6D30E7A8-D40B-4652-8A33-A90A1F97F11B";
const apiKey = "k3Jkr+UJe6ZiddKOCbgMIa6SZ+4LqoUI4AuAgLMCN59VgcCGxDCKF6zjBCi3nrbO+HSshEqpiGboY+lbSFi1Ow==";
const rest_endpoint = "https://rest-api.telesign.com";
const timeout = 10*1000; // 10 secs

const client = new TeleSignSDK( customerId,
    apiKey,
    rest_endpoint,
    timeout // optional
    // userAgent
);

const phoneNumber = "919003303579";
const message = "You're scheduled for a dentist appointment at 2:30PM.";
const messageType = "ARN";

console.log("## MessagingClient.message ##");

function messageCallback(error, responseBody) {
    if (error === null) {
        console.log(`Messaging response for messaging phone number: ${phoneNumber}` +
            ` => code: ${responseBody['status']['code']}` +
            `, description: ${responseBody['status']['description']}`);
    } else {
        console.error("Unable to send message. " + error);
    }
}
client.sms.message(messageCallback, phoneNumber, message, messageType);


app.use(express.static(pubilcPath));
app.use(bodyParser.json())

app.get('/users',(req,res)=>{
    User.find().then((users)=>{
        res.send({users})
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

app.get('/driver',(req,res)=>{
    User.find().then((users)=>{
        res.send({users})
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

app.get('/passenger',(req,res)=>{
    User.find().then((users)=>{
        res.send({users})
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

app.post('/users', (req, res) => {
    let user= new User({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        pnumber:req.body.pnumber,
        aadhar:req.body.aadhar,
        password:req.body.password
    })

    user.save().then((doc)=>{
        res.send(doc)
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

app.post('/driver', (req, res) => {
    let driver= new driver({
        name:req.body.name,
        pnumber:req.body.pnumber,
        from:req.body.from,
        to:req.body.tp,
        cnum:req.body.cnum,
        cname:req.body.cname,
        time:req.body.time,
        maxs:req.body.maxs,
        latitude:req.body.latitude,
        longitudde:req.body.longitude
    })

    user.save().then((doc)=>{
        res.send(doc)
    }).catch((err)=>{
        res.status(400).send(err)
    })
})


app.listen(port,()=>{
    console.log(port)
})

app.post('/passenger', (req, res) => {
    let passenger= new passenger({
        name:req.body.name,
        pnumber:req.body.pnumber,
        from:req.body.from,
        to:req.body.tp,
        time:req.body.time,
        latitude:req.body.latitude,
        longitudde:req.body.longitude
    })

    user.save().then((doc)=>{
        res.send(doc)
    }).catch((err)=>{
        res.status(400).send(err)
    })
})


app.listen(port,()=>{
    console.log(port)
})

