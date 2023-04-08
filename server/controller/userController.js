module.exports.register = async(req,res,next) => {
    try{
        const {username, email, password} = req.body;
        
    }catch(err){
        next(err)
    }
} 