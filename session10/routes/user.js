const express = require("express");
const router = express.Router();

const userController = require("../controller/user");
const authMiddleware = require("../middleware/auth");

router.get("/", authMiddleware.needLoginMiddleware, authMiddleware.isAdminMiddleware, userController.handleGetAll);

module.exports = router;
