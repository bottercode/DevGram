const router = require("express").Router()
const register = require("../controller/userController")

router.post("/register", register)