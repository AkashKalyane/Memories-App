const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config;

const connectDB = require("./config/db");
const routes = require("./routes/routes");

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use("/api/posts", routes.placesRoutes);

app.use("/api/users", routes.usersRoutes);

app.listen(PORT, () => {
  console.log("server is lising on 5000.");
});
