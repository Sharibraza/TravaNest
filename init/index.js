const mongoose = require("mongoose");
const initData = require("./data.js");
const User = require("../models/user.js");


main().then(() => { console.log("Connected to DB"); }).catch(err => console.log(err));
async function main() {
  await mongoose.connect("mongodb+srv://sharib:sharib@cluster0.sk7v9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
}

const initDB = async () => {
  // await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({ ...obj }));
  await User.insertMany(initData.data);
  console.log("data was reinitialized");

};
initDB();

// <% if( currUser && listing.owner._id.equals(currUser._id)) { %>
// <% } %>