const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
	res.send("Registration Done");
});

router.post("/login", (req, res) => {
	res.send("Login Done");
});

module.exports = router;
