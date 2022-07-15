const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const db = require('./db.js');
const userRoutes = express.Router();
const channelDetailsnRoutes = express.Router();
const docbookingpatientRoutes = express.Router();
const PORT = 4000;
const passport =require("passport");

let User = require('./user');
let ChannelDetails = require('./channelDetails');
let Docbookingpatient = require('./docbookingpatient');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

// User Functions Implementation

// Login User
userRoutes.post("/login",(req, res) => {
    const {email, password} = req.body;
    User.findOne({email:email},(err, user) => {
        if(user) {
            if(password=== user.password) {
                res.send({message: "login successfull", user:user})
            }else {
                res.send({message: "Invalid credentials"})
            }
        }else {
            res.send("User Not Registered")
        }
    })
})

// Get all Users
userRoutes.route('/').get(function (req, res) {
    User.find(function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.json(user);
        }
    });
});

// Get User by ID
userRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    User.findById(id, function (err, user) {
        res.json(user)
    });
});

// Update User
userRoutes.route('/update/:id').post(function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (!user)
            res.status(404).send("Data Not Found");
        else
            user.title = req.body.title,
                user.name = req.body.name,
                user.nic = req.body.nic,
                user.email = req.body.email,
                user.phone = req.body.phone,
                user.password = req.body.password,

                user.save().then(user => {
                    res.json('User Updated');
                })
                    .catch(err => {
                        res.status(400).send("Update Not Possible");
                    });
    });
});

// Add User
// userRoutes.route('/add').post(function (req, res) {
//     let user = new User(req.body);
//     user.save()
//         .then(user => {
//             res.status(200).json({ 'user': 'user added successfully' });
//         });
// });

userRoutes.post("/add", (req, res) => {
    console.log(req.body)
    const { title,name,nic,email,phone,password} = req.body;
    User.findOne({email:email}, (err, user) => {
        if(user) {
            res.send({message: "User Already Exists"})
        }else {
            const user = new User({title,name,nic,email,phone,password})
            user.save(err => {
                if(err) {
                    res.send(err)
                }else {
                    res.send({message: "Successful"})
                }
            })
        }
    })
})

// Delete User
userRoutes.route('/:id').delete(function (req, res) {
    User.findById(req.params.id)
        .then(user => user.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

// Channel Details Functions Implementation

// Get all channels
channelDetailsnRoutes.route('/').get(function (req, res) {
    ChannelDetails.find(function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.json(user);
        }
    });
});

// Get channel details by ID
channelDetailsnRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    ChannelDetails.findById(id, function (err, channelDetails) {
        res.json(channelDetails)
    });
});

// Update channel
channelDetailsnRoutes.route('/update/:id').post(function (req, res) {
    ChannelDetails.findById(req.params.id, function (err, channelDetails) {
        if (!channelDetails)
            res.status(404).send("Data Not Found");
        else
            channelDetails.date = req.body.date,
                channelDetails.status = req.body.status,
                channelDetails.time = req.body.time,

                channelDetails.save().then(channelDetails => {
                    res.json('Channel Details Updated');
                })
                    .catch(err => {
                        res.status(400).send("Update Not Possible");
                    });
    });
});

// Add channel
channelDetailsnRoutes.route('/add').post(function (req, res) {
    let channelDetails = new ChannelDetails(req.body);
    channelDetails.save()
        .then(user => {
            res.status(200).json({ 'channelDetails': 'channel details added successfully' });
        });
});

// Delete channel
channelDetailsnRoutes.route('/:id').delete(function (req, res) {
    ChannelDetails.findById(req.params.id)
        .then(channelDetails => channelDetails.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

//channelBookingpatient
/*docbookingpatientRoutes.route('/add').post(function (req, res) {
    let docbookingpatient = new Docbookingpatient(req.body);
    docbookingpatient.save()
        .then(user => {
            res.status(200).json({ 'docbookingpatient': 'channel details added successfully' });
        });
});*/


docbookingpatientRoutes.post("/add", (req, res) => {
    console.log(req.body)
    const { title,name,nic,email,phone} = req.body;
    Docbookingpatient.findOne({email:email}, (err, docbookingpatient) => {
        if(docbookingpatient) {
            res.send({message: "User Already Exists"})
        }else {
            const docbookingpatient = new Docbookingpatient({title,name,nic,email,phone})
            docbookingpatient.save(err => {
                if(err) {
                    res.send(err)
                }else {
                    res.send({message: "Successful"})
                }
            })
        }
    })
})



app.use('/user', userRoutes);
app.use('/channelDetails', channelDetailsnRoutes);
app.use('/docbookingpatient',docbookingpatientRoutes);

app.listen(PORT, function () {
    console.log("Server is running on Port : " + PORT);
})