// let students = require("./students");
let express = require("express");
let db = require("./db");
let app = express();
app.use(express.static("./public"));
app.use(express.json());
app.set("view engine", "ejs");
let logRequest = (req, res, next) => {
  console.log(`${new Date().toLocaleString()} Request: ${req.orignalUrl}`);
  next();
};
// app.use("/", logRequest); // use for every Routes
app.get("/", logRequest, (req, res) => {
  res.send("done done done");
});

let personRoutes = require("./personRoutes");
app.use("/person", personRoutes);

app.listen(3000, () => {
  console.log("server started");
});

// let students = require("./students");
// let express = require("express");
// let db = require("./db");
// let Person = require("./person");
// let School = require("./school");

// let app = express();
// app.use(express.static("./public"));

// app.use(express.json());
// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.send("done done done");
// });

// app.post("/school", async (req, res) => {
//   try {
//     let data = req.body;
//     let newSchool = new School(data);
//     let respone = await newSchool.save();
//     console.log("data saved");
//     res.status(200).json(respone);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ err: "internal server error" });
//   }
// });
// // app.post("/person", async (req, res) => {
// //   try {
// //     let data = req.body;
// //     let newPerson = new Person(data);
// //     let respone = await newPerson.save();
// //     console.log("data saved");
// //     res.status(200).json(respone);
// //   } catch (err) {
// //     console.log(err);
// //     res.status(500).json({ err: "internal server error" });
// //   }
// // });
// // app.get("/person", async (req, res) => {
// //   try {
// //     let persons = await Person.find();
// //     console.log("data fetch");
// //     res.status(200).json(persons);
// //   } catch (err) {
// //     console.log(err);
// //     res.status(500).json({ err: "internal server error" });
// //   }
// // });
// app.get("/school", async (req, res) => {
//   try {
//     let school = await School.find();
//     console.log("data fetch");
//     res.status(200).json(school);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ err: "internal server error" });
//   }
// });

// // app.get("/person/:work", async (req, res) => {
// //   try {
// //     let workType = req.params.work;
// //     if (workType === "dev" || workType === "tester" || workType === "client") {
// //       let persons = await Person.find({ work: workType });
// //       console.log("data fetch");
// //       res.status(200).json(persons);
// //     } else {
// //       res.status(404).json({ err: "invalid work error" });
// //     }
// //   } catch (err) {
// //     console.log(err);
// //     res.status(500).json({ err: "internal server error" });
// //   }
// // });
// //
// app.get("/school/:class", async (req, res) => {
//   try {
//     let classType = res.params.class;
//     if (
//       classType === "6th" ||
//       classType === "7th" ||
//       classType === "8th" ||
//       classType === "9th" ||
//       classType === "10th"
//     ) {
//       let schools = await School.find({ class: classType });
//       console.log("data fetch");
//       res.status(200).json(persons);
//     } else {
//       res.status(404).json({ err: "invalid work error" });
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ err: "internal server error" });
//   }
// });
// let personRoutes = require("./personRoutes");
// app.use("/person", personRoutes);
// app.listen(3000, () => {
//   console.log("server started");
// });
