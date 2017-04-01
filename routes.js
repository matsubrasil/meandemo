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
});


router.post('/', (req, res)=>{
    var newEmployee = {
        name: req.body.name,
        position: req.body.position,
        department: req.body.department,
        salary: req.body.salary
    }

    Employee.addEmployee(newEmployee, (err, data)=>{
        if(err){
            throw err;
        }
        else {
            res.json(data);
        }
    });
});


router.put('/:id', (req, res)=>{
    var updateEmployee = {
        name: req.body.name,
        position: req.body.position,
        department: req.body.department,
        salary: req.body.salary
    }
    Employee.updateEmployee(req.params.id, updateEmployee, (err, data)=>{
        if(err){
            throw err;
        }
        else {
            res.json(data);
        }
    });
});


router.delete('/:id', (req, res)=>{
    Employee.deleteEmployee(req.params.id, (err, data)=>{
        if(err){
            throw err;
        }
        else {
            res.json(data);
        }
    });
});

router.get('/:id', (req, res)=>{
    Employee.getEmployee(req.params.id, (err, data)=>{
        if(err){
            throw err;
        }
        else {
            res.json(data);
        }
    });
})


module.exports = router;