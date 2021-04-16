const express = require('express');

const mongoose = require('mongoose');

const tutorsRouter= require('./routes/tutor.routes');

const app = express();

//Connnect to db
const db = require('./config/keys')();

//connect to mongo

//Bodyparser
app.use(express.urlencoded({ extended: false}));

//Routes
app.use('/tutors', tutorsRouter);
const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`))