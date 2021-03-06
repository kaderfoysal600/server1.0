const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

dotenv.config()

const EmployeeRoute = require('./routes/employee')
const userRoute = require('./routes/user')
mongoose.connect('mongodb://localhost:27017/testdb',{useNewUrlParser:true,useUnifiedTopology:true})
const db = mongoose.connection
db.on('error', err=>{
    console.log(err)
})
db.once('open',()=>{
    console.log('database connection established')
})

const app = express()
var cors = require('cors')

app.use(cors())

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/uploads', express.static('uploads'))
const PORT = process.env.PORT || 3000

app.listen(PORT,()=> {
    console.log(`server is running at ${PORT}`)
})

app.use('/api/employee', EmployeeRoute)
app.use('/api/user', userRoute)