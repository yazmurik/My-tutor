const express = require('express');
const {getTutors, addTutor, editTutor, deleteTutor, getTutorById}  = require('../controllers/tutorsController');
const router = express.Router();

//model 
const TutorModel= require('../models/Tutor');

//getting tutor
router.get('/', getTutors)

//deleteing tutor
router.delete('/tutorinfo/:id', deleteTutor)

//add tutor route
router.post('/addtutor', addTutor)

//Get a movies /tutors/id
router.put('/edittutor/:id', editTutor)

//get a tutor by id 
router.get('/tutorinfo/:id', getTutorById)



module.exports = router;