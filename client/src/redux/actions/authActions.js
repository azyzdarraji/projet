import axios from 'axios'
import { GET_USER, LOGOUT, USER_FAIL, USER_LOGIN, USER_REGISTER } from '../types'
import {setAlert} from './alertActions'

export const register=(formData,navigate)=>async(dispatch)=>{
    try {
        const res=await axios.post('/api/user/signup',formData)
        dispatch({type:USER_REGISTER,payload:res.data})
        navigate('/user/rayons')
    } catch (err) {
        dispatch({type:USER_FAIL})
        // err.response.data.errors.forEach(error=>dispatch(setAlert(error.msg,"danger")))
    }
}
/// login
export const login=(formDataLogin,navigate)=>async(dispatch)=>{
    try {
        const res=await axios.post('/api/user/signin',formDataLogin)
        dispatch({type:USER_LOGIN,payload:res.data})
        navigate('/user/rayons')
    } catch (err) {
        dispatch({type:USER_FAIL})
        err.response.data.errors.forEach(error=>dispatch(setAlert(error.msg,"danger")))
    }
}




// get auth user
export const current=()=>async(dispatch)=>{
    const config={
        headers:{
            "authorization":localStorage.getItem('token')
        }
    }
    try {
        const res=await axios.get('/api/user/current',config)
        dispatch({type:GET_USER,payload:res.data})
    } catch (err) {
        dispatch({type:USER_FAIL})
    }
}

 // logout

 export const logout=()=>{
     return {
         type:LOGOUT
     }
 }

// edit profile 
 export const editprofile=(formData , navigate)=>async(dispatch)=>
 { 
     const config={
         headers:{
             "authorization":localStorage.getItem('token')
         }
     }
  try {
      const res=await axios.put('/api/user/editprofile',formData,config)
      console.log(res.data)
      dispatch (current())
      navigate ('/user/profile')
  } catch (error) {
      console.log (error)
  }
 }