const express= require('express')
const router=express.Router()

const {deleteUser, getAllUsers,getOneUser} =require ('../controllers/user')

const isAuth = require("../middelwares/isAuth");




//test 

router.get('/allUsers',isAuth,getAllUsers)

// CRUD USERs 



// methode Delete 
// url /deleteuser/:userId
// req.params
router.delete('/deleteuser/:userId',isAuth,deleteUser)





// methode get 
// url /getoneuser/:userId
//req.params
router.get('/getoneuser/:userId',isAuth,getOneUser)





module.exports=router