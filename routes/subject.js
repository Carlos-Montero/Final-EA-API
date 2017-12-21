var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var subject = require('../controllers/subject');



//GET REQUESTS
//get de todas las asignaturas
router.get('/api/todos', subject.listAllSubject);

//POST REQUESTS
//insert asignatura
router.post('/api/', subject.insertSubject);

//UPDATE REQUESTS
//Añadir student de subject
router.post('/api/:subjectId', subject.updateSubject);

//UPDATE REQUESTS
//Borrar student de subject
router.post('/api/deleteStudentSubject/:subjectId', subject.updateDeleteSubject);

//DELETE REQUESTS
//Borrar asignatura por ID
router.delete('/api/:subjectId', subject.deleteSubject);

//GET REQUESTS
//get students
router.get('/api/editSubject/:subjectName',subject.findByName);

//GET REQUESTS
//get quatris
router.get('/api/editSubjectQuatri/:subjectName',subject.findByQuatri);

//GET REQUESTS
//get Studies
router.get('/api/editSubjectStudies/:subjectName',subject.findByStudies);

module.exports=router;