const path = require('path')
const multer = require('multer')

var storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'uploads/')
    },
    filename:function(req,file,cb){
        let ext = path.extname(file.originalname)
        cb(null,Date.now()+ ext)
    }
})

var upload = multer({
    storage:storage,
    fileFilter: function(req,file,callBback){
        if(file.mimetype == 'image/jpg' || file.mimetype == 'image/png'){
            callBback(null, true)
        }else {
            console.log('only jpg and png')
            callBback(null, false)
        }
    },
    limits: {
        fileSize:1024*1024*2
    }
}) 

module.exports = upload