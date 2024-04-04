let mongooes = require("mongoose");
let schoolSchema = new mongooes.Schema({
  roll_no: {
    type: Number,
    require: true,
    unique: true,
  },
  name: {
    type: String,
    require: true,
  },
  class: {
    type: String,
    require: true,
    enum: ["6th", "7th", "8th", "9th", "10th"],
  },
  phone: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
});
let School = mongooes.model("School", schoolSchema);
module.exports = School;
