const express = require("express");
const router = express.Router();

const userController = require("../controller/user");

router.get("/", userController.handleGetUser);
router.get("/:id", userController.handleGetOneUser);
router.post("/", userController.handleCreateUser);

module.exports = router;
