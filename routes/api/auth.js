const express = require("express");

const { validateBody, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/user");

const { register, login, getCurrent } = require("../../controllers/auth");

const router = express.Router();

// sing up
router.post("/register", validateBody(schemas.registerSchema), register);

// sing in
router.post("/login", validateBody(schemas.loginSchema), login);

//
router.get("/current", authenticate, getCurrent);

module.exports = router;
