const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to database.");
  } catch (err) {
    console.log("Failed to connected the database.");
  }
};

module.exports = connectDB;
