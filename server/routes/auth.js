const router = require("express").Router();
const register = require("../controller/userController");
const login = require("../controller/userController");

router.post("/register", register);
router.post("/login", login);
