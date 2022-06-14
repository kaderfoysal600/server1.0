const express = require("express");
const router = express.Router();
const userController= require("../controllers/UserController");


router.post("/signUp", userController.signUp);

module.exports = router;
