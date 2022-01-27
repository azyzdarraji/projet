const mongoose=require('mongoose')
const schema=mongoose.Schema

const produitShema=new schema ({

    name:{
        type:String ,
        required:true
    },
    description :{
        type:String,
        required:true
    },
    prix:{
        type:Number ,
        required:true
    },
    imageUrl:{
        type:String ,
        required:true
    },
    disponible: {
        type:String 
    },
    solde: {
        type:String 
    },
    rayon:{
        type:Number,
        required:true
    }
}
)

module.exports=mongoose.model('produit',produitShema)