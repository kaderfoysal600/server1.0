const Employee = require('../models/Employee')


const index =  (req,res,next)=> {
    Employee.find({ category: null })
    .then(response=> {
        res.json(response)
    })

    .catch( err =>{
        res.json({
            message:"An error occared"
        })
    })
}
const organic = (req, res) => {
    Employee.find({ category: "organic" })
    .then(response=> {
        res.json(response)
    })
    .catch( err =>{
        res.json({
            message:"An error occared"
        })
    })
};
const show = (req, res, next)=>{
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(err=> {
        res.json({
            message:'An Error occared'
        })
    })
}

const store = (req, res, next)=> {
    console.log(req.userName)
    let employee = new Employee({
        name:req.body.name,
        prevPrice:req.body.prevPrice,
        currPrice:req.body.currPrice,
        category:req.body.category
    })
    if(req.file){
        employee.avatar = req.file.path
    }
    employee.save()
    .then(response=> {
        res.json({
            message:'Employee added successfully'
        })
    })
    .catch(error => {
        res.json({
            message:'An Error occared'
        })
    })
}

//update an employee
const update = (req,res,next) => {
    let employeeID = req.body._id
    let updatedData = {
        name:req.body.name,
        prevPrice:req.body.prevPrice,
        currPrice:req.body.currPrice,
        category:req.body.category
    }
    Employee.findByIdAndUpdate(employeeID,{$set:updatedData})
    .then(response=> {
        res.json({
            message:'Employee updated successfully'
        })
    })
    .catch(error => {
        res.json({
            message:'An Error occared'
        })
    })
}

const destory = (req,res,next) => {
    let employeeID = req.body._id
    Employee.findByIdAndRemove(employeeID)
    .then(response=> {
        res.json({
            message:'Employee deleted successfully'
        })
    })
    .catch(error => {
        res.json({
            message:'An Error occared'
        })
    })
}

module.exports = {
    index,show,store,update,destory,organic
}