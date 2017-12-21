var mongoose = require('mongoose');
var Student = mongoose.model('Student');

//read methods
exports.listAllStudent = function(req, res) {
    Student.find({}, function(err, students) {
        if (err)
            res.send(err);
        res.json(students);
    });
};

exports.findByName = function(req, res) {
    Student.find({name:req.params.studentName}, function(err, student) {
        if (err)
            res.send(err);
        res.json(student);
    });
};


//insert methods
exports.insertStudent= function(req, res) {
    var newStudent = new Student(req.body);
    console.log(newStudent);
   newStudent.save(function(err, student) {
        if (err)
            res.send(err);
        res.json(student);
        console.log(err + student);
    });
};


//delete methods
exports.deleteStudent = function(req, res) {
    Student.findByIdAndRemove(req.params.studentId, function(err, student) {
        if (err)
            res.send(err);
        res.json({ message: 'Product successfully deleted' });
    });
};

//update methods
exports.updateStudent = function(req, res) {
    Student.findOneAndUpdate({_id:req.params.studentId}, req.body, {new: true}, function(err, student) {
        if (err)
            res.send(err);
        res.json(student);
    });
};