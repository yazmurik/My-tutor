const express = require('express');
const router = express.Router();

//model 
const TutorModel= require('../models/Tutor');

router.post("/",(req,res,next)=>{
    const newTutor = new TutorModel(req.body)
    newTutor.save()
                .then((tutor)=>{res.json(tutor)})
                .catch((err)=>{res.json(err)})
})

module.exports = router;