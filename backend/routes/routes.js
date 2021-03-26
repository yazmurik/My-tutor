const express = require('express')
const router = express.Router()

router.post('/singup', (request, response)=>{
  response.send('send')
})

module.exports =router