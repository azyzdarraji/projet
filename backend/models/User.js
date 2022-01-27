const mongoose=require('mongoose')
const schema=mongoose.Schema

const userShema=new schema ({

    firstname:{
        type:String ,
        required:true
    },
    lastname:{
        type:String ,
        required:true
    },
    email :{
        type:String ,
        required:true ,
        unique:true
    },
    password :{
        type:String ,
        required:true
    },
    role:{
        type:Number, 
        default:0
    }        
    }
)

module.exports=mongoose.model('User',userShema)