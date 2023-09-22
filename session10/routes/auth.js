const express = require("express");
const router = express.Router();

const authController = require("../controller/auth");
router.post("/register", authController.handleRegister);
router.post("/", authController.handleLogin);

module.exports = router;
