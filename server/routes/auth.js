const router = require("express").Router();
const {register,login, getAllUsers} = require("../controller/userController");

router.post("/register", register);
router.post("/login", login);
router.get("/allusers/:id", getAllUsers)
module.exports = router;