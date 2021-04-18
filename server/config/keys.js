const mongoose = require('mongoose');
module.exports=()=> {
    mongoose.connect(process.env.MONGO_URI, 
    {useNewUrlParser: true,  useUnifiedTopology: true  });

mongoose.connection.on("open", () => {console.log("MongoDb connceted")});
mongoose.connection.on("error", (err)=>{console.log("MongoDb error", err)})
}