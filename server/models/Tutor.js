const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TutorSchema = new Schema({
  director_id:Schema.Types.ObjectId,
//   director_id:{type:Schema.Types.ObjectId},
  name: {
    type: String,
    required: [true, "The field `{PATH}` is required."],
    maxlength: [50,"The field `{PATH}` must be less than ({MAXLENGTH}) characters.",    ],
    minlength: [5,"The field `{PATH}` must be greater than ({MINLENGTH}) characters.",    ],
  },
  lessons: { type: String, maxlength: 30, minlength: 1 },
  about: { type: String, maxlength: 50, minlength: 3 },
  price: { type: Number, min: 0, max: 2100 },
  image: { type: String, min: 0, max: 10 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("tutor", TutorSchema);