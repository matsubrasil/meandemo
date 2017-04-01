var express = require('express');
var router = express.Router();
var Employee = require('./model');

router.get('/', (req, res)=>{
    Employee.getEmployees((err, data)=>{
        if(err){
            throw err;
        }
        else {
            res.json(data);
        }
    });
    //res.send("hello from the router...");
});

module.exports = router;