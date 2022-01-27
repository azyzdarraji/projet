import {Navbar,Container,Nav,Button,Form,FormControl,NavDropdown} from "react-bootstrap"
import "./Header.css" 
import {useNavigate} from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'
import { logout } from "../../redux/actions/authActions"
function NavBar() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const user=useSelector(state=>state.authReducer.user)
    return (
  
     
     <div className='navbar-header'> 
     <div className="nav-left">
       <h4>aziza</h4>
    <ul>
       <li onClick={()=>navigate("/")}> <i className="fas fa-home"></i> </li>
       <li onClick={()=>navigate("/user/profile")}> <i className="fas fa-user"></i> </li>
        <li onClick={()=>navigate("/user/rayons")}> <i className="fas fa-shop"></i> </li>
        <li onClick={()=>navigate("/user/shop")}> <i className="fas fa-shopping-basket"></i></li>

     
   

    </ul>
  </div>
  <div className="nav-right">
    <div className="search-box">
      <input type="text" name="search" placeholder="Search" />
      <i className="fas fa-search"></i>
    </div>
   <div className="pps">
 
   {
     user&&user.role===1?
     <i onClick={()=>navigate("/user/settings")} className="fas fa-cog">admin</i> 
     :
     <h4>{user&&user.firstname}</h4>
   }

   <i  onClick={()=>{dispatch(logout());navigate('/')}} className="fas fa-power-off"></i>          
   </div>
   </div>

  
  </div> 

    
    )
}
export default NavBar; 