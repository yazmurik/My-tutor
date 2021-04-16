const express = require('express');
const router = express.Router();

//model 
const TutorModel= require('../models/Tutor');

router.put('/:tutorId', (req, res,next)=> {
    TutorModel.findByIdAndUpdate(req.params.tutorId,req.body,{new:true})
                    .then((tutor)=>{res.json(tutor)})
                    .catch((err)=>{res.json(err)})
})

module.exports = router;