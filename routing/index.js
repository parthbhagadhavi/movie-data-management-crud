
const express=require('express')
const route=express.Router()

const homeController=require('../controllers/homecontroller')
const multer=require('multer')

const filestorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null,file.originalname )
  }
})

const fileupload = multer({ storage: filestorage }).single('image')

route.get('/',homeController.home)
route.get('/add',homeController.add)
route.post('/insertdata',fileupload,homeController.insertdata)
route.get('/editdata', homeController.editdata);

route.post('/updatedata', fileupload, homeController.updatedata);
route.get('/deletedata', homeController.deletedata);
route.get('/*"*"',homeController.error)

module.exports=route