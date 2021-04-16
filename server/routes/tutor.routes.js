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

router.post("/",(req,res,next)=>{
    const newTutor = new TutorModel(req.body)
    newTutor.save()
                .then((tutor)=>{res.json(tutor)})
                .catch((err)=>{res.json(err)})
})

//Update a tutor with new infos /tutors/:tutorId
router.put('/:tutorId', (req, res,next)=> {
    TutorModel.findByIdAndUpdate(req.params.tutorId,req.body,{new:true})
                    .then((tutor)=>{res.json(tutor)})
                    .catch((err)=>{res.json(err)})
})

//Delete a tutor
router.delete('/:tutorId', (req, res,next)=> {
    TutorModel.findByIdAndRemove(req.params.tutorId)
                    .then((tutor)=>{res.json(tutor)})
                    .catch((err)=>{res.json(err)})
})

module.exports = router;