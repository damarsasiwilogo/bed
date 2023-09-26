const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();

const authController = require("../controller/auth");
const authMiddleware = require("../middleware/auth");

router.post(
  "/register",
  [body("email").isEmail()],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // ini validasi gagal
      res.status(400).json({
        ok: false,
        message: "failed data validation",
        errors,
      });
      return;
    }

    next();
  },
  authController.handleRegister
);

router.post("/", authController.handleLogin);
router.patch("/profile", authMiddleware.validateToken, authController.updateProfile);

module.exports = router;
