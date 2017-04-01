var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = require('./routes');

var config = "mongodb://localhost:27017/employeedb";
mongoose.connect(config)
        .connection
            .on('connected', ()=>{
                console.log("successfully connected to " + config);
            })
            .on('error', (err)=>{
                console.log("--> database error " + err);
            });

var app = express();
var port = 3000;

app.get('/', (req, res)=>{
    res.send("Hello from Alexandre...");
});

//middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// routes
app.use('/api/employees', router);

app.listen(port, ()=>{
    console.log("Server is running on port " + port);
});