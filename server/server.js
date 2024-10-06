const express = require("express");
const bodyParser = require("body-parser");
const cloudinary = require("cloudinary");

const cors = require("cors");
require("dotenv").config;

const connectDB = require("./config/db");
const routes = require("./routes/routes");

connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.use("/api/posts", routes.placesRoutes);

app.use("/api/users", routes.usersRoutes);

app.listen(PORT, () => {
  console.log("server is lising on 5000.");
});
