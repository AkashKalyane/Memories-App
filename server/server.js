const express = require("express");
const bodyParser = require("body-parser");

const connectDB = require("./config/db");
const routes = require("./routes/routes");

connectDB();

const app = express();

app.use(bodyParser.json());

app.use("/api/posts", routes.placesRoutes);

app.use("/api/users", routes.usersRoutes);

app.listen(5000, () => {
  console.log("server is lising on 5000.");
});
