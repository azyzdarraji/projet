import "./AddNewProduct.css"
import { useEffect, useState } from "react"
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {addNewProduct} from '../../redux/actions/productActions'
function AddNewProduct()
{  
    const product=useSelector(state=>state.productReducer.product)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [formData,setFormData]=useState({ name:"",description:"",prix:0,imageUrl:"",disponible:'',solde:'',rayon:''})

    const handlChange=(e)=>{
       setFormData ({...formData,[e.target.name]:e.target.value})
    }
    return( <div className="editprofile">  
     <div  className="editinput">
     <p> name product  :</p> 	
    <input type="text" name="name"  onChange={handlChange}/>
     </div>

     <div  className="editinput">
     <p> Description   :</p> 	
    <input type="text" name="description" onChange={handlChange}/>
     </div>

   <div className="editinput">
       <p>prix :</p>
       <input type="number" name="prix" onChange={handlChange}/>
    </div>
    
   <div className="editinput">
       <p>imageUrl:</p>
       <input type="text" name="imageUrl" onChange={handlChange}/>
    </div>
    <div className="editinput">
        <p>disponible oui/non :</p>
        <input type="text" name= "disponible"   onChange={handlChange}/>
    </div> 

    <div className="editinput">
        <p>solide oui/non :</p>
        <input type="text" name= "solde"   onChange={handlChange}/>
    </div> 
    <div className="editinput">
        <p>rayon 1,2,3 ou 4 :</p>
        <input type="Number" name= "rayon"   onChange={handlChange}/>
    </div> 
    <div className="editinput">
    <button onClick={()=>{dispatch(addNewProduct(formData,navigate))}}>  ADD Product  </button>
    </div>
    
    </div> )    
}

export default  AddNewProduct