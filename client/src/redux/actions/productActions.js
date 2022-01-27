import axios from 'axios'
import { INCREMENT,DECREMENT,ADD_TO_SHOP ,ALL_PRODUCTS ,GET_ALL_PRODUCTS ,GET_ONE_PRODUCT ,ADD_PRODUCT,DELETE_PRODUCT,UPDATE_PRODUCT ,TOGGLEFALSE,TOGGLETRUE, REMOVE_TO_SHOP} from '../types'

// ADD_TO_SHOP 

export const addtoshop=(id)=>{

    return {
        type : ADD_TO_SHOP , payload : id 
    }
}

export const removetoshop=(id)=>{

    return {
        type : REMOVE_TO_SHOP, payload : id 
    }
}

export const increment=(id)=>{
    return {
        type: INCREMENT , payload:id
    }
  
}

export const decrement=(id)=>{
    return {
        type : DECREMENT , payload:id
    }
}





// get all product for admin 

export const allproduct=()=>async(dispatch)=>
{ 
    const config={
        headers:{
            "authorization":localStorage.getItem('token')
        }
    }
 try {
     const res=await axios.get('/api/product/allproducts',config)
     console.log(res.data)
     dispatch ({type:ALL_PRODUCTS,payload :res.data})
 } catch (error) {
     console.log (error)
 }
}


// get all product by rayon

export const getAllProducts=(rayon)=>async(dispatch)=>
{ 
    const config={
        headers:{
            "authorization":localStorage.getItem('token')
        }
    }
 try {
     const res=await axios.get(`/api/product/getallproducts/${rayon}`,config)
     console.log(res.data)
     dispatch ({type:GET_ALL_PRODUCTS,payload :res.data})
 } catch (error) {
     console.log (error)
 }
}

// afichage Product

export const getoneproduct=(id)=>async(dispatch)=>
{ 
    const config={
        headers:{
            "authorization":localStorage.getItem('token')
        }
    }
 try {
     const res=await axios.get(`/api/product/getoneproduct/${id}`,config)
     console.log(res.data)
     dispatch ({type:GET_ONE_PRODUCT,payload :res.data})
 } catch (error) {
     console.log (error)
 }
}
 //delete product
export const deleteproduct=(id)=>async(dispatch)=>
{ 
    const config={
        headers:{
            "authorization":localStorage.getItem('token')
        }
    }
 try {
     const res=await axios.delete(`/api/product/deleteproduct/${id}`,config)
     console.log(res.data)
     dispatch (allproduct())
 } catch (error) {
     console.log (error)
 }
}
//add New Product 
export const addNewProduct=(product,navigate)=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }   
    console.log(product)
    try {
      await axios.post('/api/product/addproduct',product,config)
      dispatch(allproduct())
      navigate('/admin/productlist')

    } catch (error) {
      console.log (error)
    }
  }

  // Edit Product put

export const upadateproduct=(id,formData)=>async(dispatch)=>{
    const config={
        headers:{
            "authorization":localStorage.getItem('token')
        }
    }   
  try {
   const res= await axios.put(`/api/product/updateproduct/${id}`,formData,config)

    dispatch(allproduct())
console.log(res.data)
  } catch (error) {
    console.log(error)
  }
}

export const toggleTrue=()=>{
    return {
     type :TOGGLETRUE
    }
     }


     export const toggleFlase=()=>{

       return {
        type :TOGGLEFALSE
       }
        }



