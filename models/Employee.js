const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    name:{
        type:String
    },
    prevPrice:{
        type:Number
    },
    currPrice:{
        type:Number
    },
    avatar:{
        type:String
    },
    category:{
        type:String
    }
},{timestamps:true})

const Employee = mongoose.model('Employee', employeeSchema)
module.exports = Employee