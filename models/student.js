var mongoose = require('mongoose');

var student = mongoose.Schema({
    name: String,
    address: String,
    phone: String
},{collection:'students'});

module.exports=mongoose.model('Student', student);