var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var student = require('../controllers/student');



//GET REQUESTS
//get all the user
router.get('/api/todos',student.listAllStudent);

//POST REQUESTS
//insert user
router.post('/api/', student.insertStudent);

//DELETE REQUESTS
//delete user by id
router.delete('/api/:studentId',student.deleteStudent);

//UPDATE REQUESTS
//update user by id
router.post('/api/edit/:studentId', student.updateStudent);

//GET REQUESTS
//get students
router.get('/api/:studentName',student.findByName);

module.exports=router;