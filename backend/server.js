const express = require("express");
require("dotenv").config();
const workout = require("./routes/workout");

const app = express();

// middleware
app.use(express.json());

//routes
app.use("/api/workout", workout);

//set up
app.listen(process.env.PORT, () => {
  console.log("Listening on port " + process.env.PORT);
});
