import "./EditProduct.css"
import { useEffect, useState } from "react"
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {upadateproduct} from '../../redux/actions/productActions'
function EditProduct()
{  
    const product=useSelector(state=>state.productReducer.product)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [formData,setFormData]=useState({ name:product.name,description:product.description,prix:product.prix,imageUrl:product.imageUrl,disponible:product.disponible,solde:product.solde,rayon:product.rayon})
    const handlChange=(e)=>{
       setFormData ({...formData,[e.target.name]:e.target.value})
    }
    useEffect (()=>{
        setFormData({name:product.name ,description:product.description , prix:product.prix,imageUrl:product.imageUrl, disponible:product.disponible , solde:product.solde, rayon:product.rayon})  }
        ,[product])
    return(  <div className="editprofile">  
    <div  className="editinput">
    <p> name product  :</p> 	
   <input type="text" name="name" value={formData.name}  onChange={handlChange}/>
    </div>

    <div className="editinput">
      <p>Description :</p>
      <input type="text" name="description"   value={formData.description} onChange={handlChange}/>
   </div>
  <div className="editinput">
      <p>prix :</p>
      <input type="number" name="prix"   value={formData.prix} onChange={handlChange}/>
   </div>
   <div className="editinput">
      <p>imageUrl :</p>
      <input type="text" name="imageUrl"   value={formData.imageUrl} onChange={handlChange}/>
   </div>
   <div className="editinput">
       <p>disponible oui/non :</p>
       <input type="text" name= "disponible"   value={formData.disponible}  onChange={handlChange}/>
   </div> 

   <div className="editinput">
       <p>solde oui/non :</p>
       <input type="text" name= "solde"   value={formData.solde}  onChange={handlChange}/>
   </div> 
   <div className="editinput">
       <p>rayon 1,2,3 ou 4 :</p>
       <input type="Number" name= "rayon"   value={formData.rayon} onChange={handlChange}/>
   </div> 
   <div className="editinput">
   <button onClick={()=>{dispatch( upadateproduct(product._id,formData) ) ;navigate('/admin/productlist')  }  }>  Save Edit   </button>
   </div>
   
   </div> )    
}

export default  EditProduct