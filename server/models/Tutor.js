const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TutorSchema = new Schema({
  director_id:Schema.Types.ObjectId,
//   director_id:{type:Schema.Types.ObjectId},
  name: { type: String, reguired: true},
  lessons:  { type: String,required: true},
  about: { type: String,required: true },
  price: { type: Number, reguired: true},
  img: { type: String},
});

module.exports = mongoose.model("Tutor", TutorSchema);