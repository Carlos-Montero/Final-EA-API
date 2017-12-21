var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var student = require('../controllers/student');



//GET REQUESTS
//get de todos los estudiantes
router.get('/api/todos',student.listAllStudent);

//POST REQUESTS
//insertar estudiante
router.post('/api/', student.insertStudent);

//DELETE REQUESTS
//borrar estudiante por id
router.delete('/api/:studentId',student.deleteStudent);

//UPDATE REQUESTS
//actualizar estudiante por id
router.post('/api/edit/:studentId', student.updateStudent);

//GET REQUESTS
//buscar estudiante por nombre
router.get('/api/:studentName',student.findByName);

module.exports=router;