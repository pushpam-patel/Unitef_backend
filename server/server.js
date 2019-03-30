let express = require('express')
let bodyParser = require('body-parser')

let { mongoose } = require('./db/mongoose.js')

let { User } = require('./models/user.js')
let { Driver } = require('./models/driver.js')
let { Passenger } = require('./models/passenger.js')
let { Group } = require('./models/group.js')
let { Request } = require('./models/request.js')

let app = express()
let port = process.env.PORT || 3000

app.use(bodyParser.json())

app.get('/users', (req, res) => {
    User.find().then((users) => {
        res.send(users)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.post('/users', (req, res) => {
    let user = new User({
        first_Name:req.body.first_Name,
        last_Name:req.body.last_Name,
        email:req.body.email,
        aadhar:req.body.aadhar,
        pnumber:req.body.pnumber,
        password:req.body.password,
        balance:req.body.balance
    })

    user.save().then((doc) => {
        res.send(doc)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.get('/drivers', (req, res) => {
    Driver.find().then((drivers) => {
        res.send(drivers)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.post('/drivers', (req, res) => {
    let driver = new Driver({
        name:req.body.name,
        pnumber:req.body.pnumber,
        from:req.body.from,
        to:req.body.to,
        cnum:req.body.cnum,
        cname:req.body.cname,
        time:req.body.time,
        maxs:req.body.maxs,
        latitude:req.body.latitude,
        longitude:req.body.longitude
    })

    driver.save().then((doc) => {
        res.send(doc)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.get('/passengers', (req, res) => {
    Passenger.find().then((passengers) => {
        res.send(passengers)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.post('/passengers', (req, res) => {
    let passenger = new Passenger({
        name:req.body.name,
        pnumber:req.body.pnumber,
        from:req.body.from,
        to:req.body.to,
        time:req.body.time,
        latitude:req.body.latitude,
        longitude:req.body.longitude
    })

    passenger.save().then((doc) => {
        res.send(doc)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.get('/groups', (req, res) => {
    Group.find().then((groups) => {
        res.send(groups)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.post('/groups', (req, res) => {
    let group = new group({
        namep:req.body.namep,
        pnumberp:req.body.pnumberp,
        emaild:req.body.emaild,
        pnumberd:req.body.pnumberd,
        named:req.body.named
    })

    group.save().then((doc) => {
        res.send(doc)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.get('/requests', (req, res) => {
    Request.find().then((requests) => {
        res.send(requests)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.post('/requests', (req, res) => {
    let request = new Request({
        namep:req.body.namep,
        named:req.body.named,
        pnumberp:req.body.pnumberp,
        pnumberd:req.body.pnumberd
    })

    request.save().then((doc) => {
        res.send(doc)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.listen(port)