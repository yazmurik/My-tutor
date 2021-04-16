const express = require('express');
const router = express.Router();

//model 
const TutorModel= require('../models/Tutor');

router.delete('/:tutorId', (req, res,next)=> {
    TutorModel.findByIdAndRemove(req.params.tutorId)
                    .then((tutor)=>{res.json(tutor)})
                    .catch((err)=>{res.json(err)})
})

module.exports = router;