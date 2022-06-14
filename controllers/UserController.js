const User = require('../models/userSchema')
const bycrypt = require('bcrypt')
const signUp = async(req, res, next)=> {
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

module.exports = {signUp}
