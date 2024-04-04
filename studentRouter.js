let express = require("express");
let router = express.Router();
let student = require("./students");

router.post('/', async(req,res)=>{
  try{let data = req.body
  let newStudent = new student(data) }
})
