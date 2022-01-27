const User =require('../models/User')

// DELETE USER ROLE ADMIN 
exports.getAllUsers=async(req,res)=>{
try {
    const users=await User.find()
    res.send(users)
} catch (error) {
    console.log(error)
}
}
exports.deleteUser=async(req,res)=>{
        const{userId}=req.params
        try {
            await User.findByIdAndDelete(userId)
            res.status(200).send ("user deleted")
        } catch (error) {
            res.status(500).send('user not deleted')
            
        }
}


//  GET ONE USER

exports.getOneUser=async(req,res)=>{
    const {userId}=req.params
    console.log(req.params)
    try {
      const user=  await User.findById(userId)
        res.status(200).send(user)
    } catch (error) {
console.log(error)
    res.status(500).send('Eror code OR id')   
    }
}





