const express = require("express");
const router = express.Router();
const { User } = require("../models");

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    console.log("Error fetching users", err);
    res.status(500).send("An error occurred while fetching users");
  }
});

module.exports = router;
