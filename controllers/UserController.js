const User = require('../models/userSchema')
const bycrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const signUp = async(req, res)=> {
const hashedPassword = await bycrypt.hash(req.body.password, 10)
    const newUser = new User({
        name:req.body.name,
        userName:req.body.userName,
        password: hashedPassword,
        status:req.body.status
    })
    newUser.save()
    .then(response=> {
        res.json({
            message:'user added successfully'
        })
    })
    .catch(error => {
        res.json({
            message:'An Error occared'
        })
    })
}
const logIn = async(req,res,next) => {
    const user = await User.find({userName:req.body.userName})
    console.log(user)
    if(user && user.length>0){
        const isValied = await bycrypt.compare(req.body.password , user[0].password)
        if(isValied){
            const token = jwt.sign({
                userName:user[0].userName,
                userId:user[0]._id},process.env.JWT_SECRET,{expiresIn:'1h'})
                res.status(200).json({
                    "access_token":token,
                    "message":"login successful"
                })
        }else{
            res.status(401).json({
                "error":"authentication failed1"
            })
        }
    }else{
        res.status(401).json({
            "error":"authentication failed2"
        })
    }
   }

module.exports = {signUp,logIn}
