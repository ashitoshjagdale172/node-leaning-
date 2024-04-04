let mongoose = require("mongoose");
//
// let mongoURL = "mongodb://127.0.0.1:27017/first";
let mongoURL =
  "mongodb+srv://ashitoshjagdale172:uauKuqiyE0LNE2h0@cluster0.6l9fbkc.mongodb.net/";

//

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;

db.on("connected", () => {
  console.log("database connected");
});

db.on("error", (err) => {
  console.log("mongodb error", err);
});

db.on("disconnected", (err) => {
  console.log("database disconnected");
});
// db.close()
module.exports = db;
