const express = require("express");

const { validateBody } = require("../../middlewares");
const { schemas } = require("../../models/user");

const { register, login } = require("../../controllers/auth");

const router = express.Router();

// sing up
router.post("/register", validateBody(schemas.registerSchema), register);

// sing in
router.post("/login", validateBody(schemas.loginSchema), login);

module.exports = router;
