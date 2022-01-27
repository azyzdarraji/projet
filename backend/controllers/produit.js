const Produit =require('../models/Produit')

// ADD NEW PRODUCT  ROLE ADMIN 

exports.addProduct=async(req,res)=>{
    let {name ,description ,prix,imageUrl,disponible,solde,rayon}=req.body
   rayon=Number(rayon)
console.log(req.body)
    try {
        const produit= new Produit ({
            name,description,prix,imageUrl,disponible,solde,rayon
        })

        await produit.save()
        res.status(200).send(produit)
    } catch (error) {
        res.status(500).send(error)
    }
  
}

// DELETE PRODUCT ROLE ADMIN 

exports.deleteProduct=async(req,res)=>{
        const{productId}=req.params
        try {
            await Produit.findByIdAndDelete(productId)
            res.status(200).send ("Product deleted")
        } catch (error) {
            res.status(500).send('not deleted')
            
        }
}

// GET ALL PRODUCTS 
exports.getAllProducts=async(req,res)=>{
const rayon=req.params.rayon
    try {
        const products= await Produit.find({rayon})
        res.status(200).send({msg:"list of products",products})
    } catch (error) {
       res.status(500).send('err ') 
    }
}

//  GET ONE PRODUCT

exports.getOneProduct=async(req,res)=>{
    const {productId}=req.params
    console.log(req.params)
    //const{name,prix.disponible,solide}=req.body
    try {
      const product=  await Produit.findById(productId)
        res.status(200).send(product)
    } catch (error) {
console.log(error)
    res.status(500).send('Eror code OR id')   
    }
}


// UPDATE PRODUCT ROLE ADMIN 

exports.updateProduct=async (req,res)=>{
    const rayon=Number(req.body.rayon)
    const {productId}=req.params
try {
 
    await Produit.findByIdAndUpdate(productId,{$set:{...req.body,rayon}})
    res.status(200).send("product updated")
} catch (error) {
    res.status(500).send('product not updated')
}
}

// GET ALL PRODUCTS 
exports.AllProducts=async(req,res)=>{
        try {
            const products= await Produit.find()
            res.status(200).send({msg:"list of products",products})
        } catch (error) {
           res.status(500).send('err ') 
        }
    }