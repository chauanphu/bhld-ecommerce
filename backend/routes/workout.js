const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.body);
  res.send("Got All");
});

router.get("/:id", (req, res) => {
  console.log(req.params);
  res.send(`Got ${req.id}`);
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("Posted");
});

router.patch("/:id", (req, res) => {
  console.log(req.params);
  res.send(`Patched ${req.id}`);
});

router.delete("/:id", (req, res) => {
  console.log(req.body);
  res.send("Deleted");
});

module.exports = router;
