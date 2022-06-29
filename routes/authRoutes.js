const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authControllers");
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});
const auth = require("../middleware/auth");

const registerSchema = Joi.object({
	username: Joi.string().min(3).max(12).required(),
	password: Joi.string().min(8).max(64).required(),
	mail: Joi.string().email().required(),
});

const loginSchema = Joi.object({
	password: Joi.string().min(8).max(64).required(),
	mail: Joi.string().email().required(),
});

router.post(
	"/register",
	validator.body(registerSchema),
	authControllers.controllers.regsiter
);
router.post(
	"/login",
	validator.body(loginSchema),
	authControllers.controllers.login
);

router.get("/test", auth, (req, res) => {
	res.send("request passed");
});

module.exports = router;
