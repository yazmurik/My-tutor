const express = require('express')
const router = express.Router()

//Login Page
router.get('/login', (req,res)=> res.send('Login'));

//Register page
router.get('/register', (req,res)=> res.send('Register'));

//Register Handle
router.post('/register', (req, res)=>{
    console.log(req.body)
    res.send('hello');
})

module.exports =router