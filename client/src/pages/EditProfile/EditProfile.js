import "./EditProfile.css"
import { useEffect, useState } from "react"
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {editprofile} from '../../redux/actions/authActions'
function EditProfile()
{  
    const user=useSelector(state=>state.authReducer.user)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [formData,setFormData]=useState({ firstname:"",lastname:'',email:""})

    const handlChange=(e)=>{
       setFormData ({...formData,[e.target.name]:e.target.value})
    }
    useEffect (()=>{setFormData({firstname:user.firstname , lastname:user.lastname , email:user.email})  },[])
    return( <div className="editprofile">  
     <div  className="editinput">
     <p>firstname :</p> 	
    <input type="text" name="firstname" value={formData.firstname} onChange={handlChange}/>
     </div>
   <div className="editinput">
       <p>lastname :</p>
       <input type="text" name="lastname" value={formData.lastname} onChange={handlChange}/>
    </div>
    <div className="editinput">
        <p>email :</p>
        <input type="email" name= "email"  value={formData.email} onChange={handlChange}/>
    </div> 
    <div className="editinput">
    <button onClick={()=>{dispatch(editprofile (formData,navigate) )}}>  Save </button>
    </div>
    
    </div> )    
}

export default  EditProfile