const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main().then(() => { console.log("connected"); }).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Wanderlust');
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data= initData.data.map( (obj) => ({...obj, owner: "672f14410e3841154b820785" }));
  await Listing.insertMany(initData.data);
  console.log("data was reinitialized");
};
initDB();
