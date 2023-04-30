const User = require("../model/userModel");
const bcrypt = require("bcrypt")

module.exports.register = async(req,res,next) => {
    try{
        const {username, email, password: plainPassword} = req.body;
        const usernameCheck = await User.findOne({ username })
        if(usernameCheck){
            return res.json({msg: "Username already in use", status: false})
        }
        const emailCheck = await User.findOne({email})
        if(emailCheck){
            return res.json({msg: "Email already in use", status: false})
        }
        const hashedPassword = await bcrypt.hash(plainPassword, 10);
        const user = await User.create({
            email,
            username,
            password: hashedPassword
        })
        const {password, ...others} = user._doc;
        console.log(others)
        return res.json({ status: true, user:others})
    }catch(err){
        next(err)
    }
} 

module.exports.login = async(req,res,next) => {
    try{
        const {username, password} = req.body;
        const user = await User.findOne({username})
        if(!user){
            return res.json({msg: "Incorrect password or username", status: false})
        }
        const comparePassword = await bcrypt.compare(password, user.password)
        if(!comparePassword){
            return res.json({msg: "Incorrect password or username", status: false})
        }
        delete user.password;
        return res.json({ status: true, user})
    }catch(err){
        next(err)
    }
} 

module.exports.getAllUsers = async(req,res,next) => {
    try{
        const users = await User.find({_id: {$ne: req.params}}).select([
            "email",
            "username",
            "_id"
        ])
        return res.json(users) 
    }catch(err){
        next(err)
    }
}

module.exports.logOut = (req, res, next) => {
    try {
      if (!req.params.id) return res.json({ msg: "User id is required " });
      onlineUsers.delete(req.params.id);
      return res.status(200).send();
    } catch (ex) {
      next(ex);
    }
  };