const express = require('express');
const router = express.Router();

//model 
const TutorModel= require('../models/Tutor');

router.get('/', (req, res)=> {
    TutorModel.find()
                    .then((tutorList)=>{res.json(tutorList)})
                    .catch((errMsg)=>{res.json(errMsg)})
})

//Get a movies /tutors/id
router.get('/tutorinfo/:tutorId', (req, res)=> {
    TutorModel.findById(req.params.tutorId)
                    .then((tutor)=>{res.json(tutor)})
                    .catch((errMsg)=>{res.json(errMsg)})
})

module.exports = router;