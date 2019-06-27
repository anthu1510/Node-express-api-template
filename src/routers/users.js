const express = require("express");
const router = express.Router();

// Database connection config file access
//const con = require("../config/db_config");

router.get("/", (req, res) => {
  res.send("Get method Worked.....");
});

router.post("/", (req, res) => {
  res.send("Post method Worked.....");
});

router.put("/", (req, res) => {
  res.send("Put method Worked.....");
});

router.delete("/", (req, res) => {
  res.send("Delete method Worked.....");
});

router.patch("/", (req, res) => {
  res.send("Patch method Worked.....");
});

module.exports = router;
