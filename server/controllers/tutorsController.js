const asyncHandler = require('express-async-handler')
const Tutor = require('../models/Tutor')

const getTutors = asyncHandler(async  (req, res)=> {
    const tutors = await Tutor.find()
    res.json(tutors)
})

const getTutorById = asyncHandler(async  (req, res)=> {
    const tutor = await Tutor.findById(req.params.id)
    res.json(tutor)
})

const addTutor = asyncHandler(async  (req, res)=> {

    const tutor = new Tutor({
        name: req.body.name,
        lessons: req.body.lessons,
        about: req.body.about,
        price: req.body.price,
        img: req.body.img
    })
    const tutorCreated = await tutor.save()
    res.json(tutorCreated)
})

const editTutor = asyncHandler(async  (req, res)=> {

    const {name, lessons, about, price,img} = req.body;
    const tutor = await Tutor.findById(req.params.id)

    if(tutor){
        tutor.name = name;
        tutor.lessons= lessons;
        tutor.about = about;
        tutor.price = price;
        tutor.img = img

        const updatedTutor = await tutor.save()
        res.json(updatedTutor)
    }else{
        res.status(404).json({message: "tutor not found"});
    }

})

const deleteTutor = asyncHandler(async  (req, res)=> {
    const tutor = await Tutor.findById(req.params.id)
    if(tutor){
        await tutor.remove()
    }
    res.json({message: "tutor is removed"})
})

module.exports = {getTutors, addTutor, editTutor, deleteTutor, getTutorById};