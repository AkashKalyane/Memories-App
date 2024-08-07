const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://akashkalyane:akash989@cluster0.abbw7rf.mongodb.net/memory?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to database.");
  } catch (err) {
    console.log("Failed to connected the database.");
  }
};

module.exports = connectDB;
