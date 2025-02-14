const express = require("express");
const router = express.Router();

//router-level middleware
router.use((req, res, next) => {
  console.log(`${req.method} request to "/users${req.url}"`);
  next();
});

// GET request to fetch all users
router.get("/", (req, res) => {
  res.send("List of all orders");
});

// POST request to add a new user
router.post("/", (req, res) => {
  res.send("New order added");
});

module.exports = router;
