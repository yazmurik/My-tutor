const express = require('express');
const mongoose = require('mongoose');
const dotenv =require('dotenv')

const app = express();

dotenv.config()
mongoose.connect(process.env.DB_ACCESS, () => console.log("DB Connected"))

//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`))