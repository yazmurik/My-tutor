const express = require('express');
const mongoose = require('mongoose');


const app = express();

//Connnect to db
const db = require('./config/keys').MongoURI;

//connect to mongo
mongoose.connect(db, {useNewUrlParser: true,  useUnifiedTopology: true  })
.then(() => console.log("mongo db connected"))
.catch(err => console.log(err));

//Bodyparser
app.use(express.urlencoded({}))

//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`))