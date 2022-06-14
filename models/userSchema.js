const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
   userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["active", "inactive"]
    }
})

const User = mongoose.model('User',userSchema)
module.exports = User