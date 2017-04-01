var mongoose = require('mongoose');
var empSchema = new mongoose.Schema({
    name: String,
    position: String,
    department: String,
    salary: String
});

var Employee = mongoose.model('Employee', empSchema);

module.exports = Employee;

module.exports.getEmployees = function(callback){
    //console.log("get employees");
    Employee.find(callback);
};