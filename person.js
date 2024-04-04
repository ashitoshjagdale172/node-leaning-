// let mongoose = require("mongoose");
// let personSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   age: {
//     type: Number,
//   },
//   work: {
//     type: String,
//     required: true,
//     enum: ["Engineer", "Doctor", "Teacher"],
//   },
//   mobile: {
//     type: Number,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   address: {
//     type: String,
//   },
//   salary: {
//     type: Number,
//     required: true,
//   },
// });
// let Person = mongoose.model("Person", personSchema);
// module.exports = Person;

let mongoose = require("mongoose");
let personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  work: {
    type: String,
    required: true,
    enum: ["dev", "tester", "client"],
  },
  mobile: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
  salary: {
    type: Number,
    required: true,
  },
});
let Person = mongoose.model("Person", personSchema);

module.exports = Person;
