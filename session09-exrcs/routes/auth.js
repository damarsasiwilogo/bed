const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();

const authController = require("../controller/auth");
const authMiddleware = require("../middleware/auth");
const authValidator = require("../middleware/validation/auth");

router.post("/register", authValidator.registerValidationRules, authValidator.applyRegisterValidation, authController.handleRegister);

router.post("/", authController.handleLogin);
router.patch("/profile", authMiddleware.validateToken, authController.updateProfile);

module.exports = router;
