const express = require('express');
const cors= require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv')

const tutorsRouter= require('./routes/tutorRoutes');


const app = express();

dotenv.config();
//Connnect to db
const connectDB = require('./config/keys');

connectDB();

//connect to mongo

//Bodyparser


//
app.use(bodyParser.json({limit: "30mb", extended:true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors())

//Routes
app.use('/tutors', tutorsRouter);


const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`))