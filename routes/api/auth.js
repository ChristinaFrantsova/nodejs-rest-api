const express = require("express");

const { validateBody, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/user");

const {
  register,
  login,
  getCurrent,
  logout,
} = require("../../controllers/auth");

const router = express.Router();

// sing up
router.post("/register", validateBody(schemas.registerSchema), register);

// sing in
router.post("/login", validateBody(schemas.loginSchema), login);

// current
router.get("/current", authenticate, getCurrent);

// log out
router.post("/logout", authenticate, logout);

module.exports = router;
