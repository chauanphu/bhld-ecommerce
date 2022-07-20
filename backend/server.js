const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const workout = require("./routes/workout");

const app = express();

// middleware
app.use(express.json());

//routes
app.use("/api/workout", workout);

//connecting to db
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

//set up
app.listen(process.env.PORT, () => {
  console.log("Listening on port " + process.env.PORT);
});
