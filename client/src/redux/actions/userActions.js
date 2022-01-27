import axios from 'axios'
import { GET_ALL_USERS ,GET_ONE_USER,DELETE_USER} from '../types'



export const getallusers=()=>async(dispatch)=>
{ 
    const config={
        headers:{
            "authorization":localStorage.getItem('token')
        }
    }
 try {
     const res=await axios.get('/api/admin/allUsers',config)
     console.log(res.data)
     dispatch ({type:GET_ALL_USERS,payload :res.data})
 } catch (error) {
     console.log (error)
 }
}



export const getoneuser=(id)=>async(dispatch)=>
{ 
    const config={
        headers:{
            "authorization":localStorage.getItem('token')
        }
    }
 try {
     const res=await axios.get(`/api/admin/getoneuser/${id}`,config)
     console.log(res.data)
     dispatch ({type:GET_ONE_USER,payload :res.data})
 } catch (error) {
     console.log (error)
 }
}



export const deleteuser=(id)=>async(dispatch)=>
{ 
    const config={
        headers:{
            "authorization":localStorage.getItem('token')
        }
    }
 try {
     const res=await axios.delete(`/api/admin/deleteuser/${id}`,config)
     console.log(res.data)
     dispatch (getallusers())
 } catch (error) {
     console.log (error)
 }
}


