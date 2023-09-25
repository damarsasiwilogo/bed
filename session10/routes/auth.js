const express = require("express");
const router = express.Router();

const authController = require("../controller/auth");
const authMiddleware = require("../middleware/auth");

router.post("/register", authController.handleRegister);
router.post("/", authController.handleLogin);
router.get("/refresh", authMiddleware.needLoginMiddleware, authController.handleRefreshToken);

module.exports = router;
