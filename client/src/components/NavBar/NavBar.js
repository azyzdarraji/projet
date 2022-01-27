import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { logout } from '../../redux/actions/authActions'

import './NavBar.css'


function NavBar() {

    return (
        <div className="nav-bar" style={{display:"flex",gap:"450px",justifyContent:"flex-end"}}>
            
 {/* search */}

     <div className='search-shop' style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px"}}>
     <i class="fas fa-search"></i>
  <input type="search"   />
  <i class="fas fa-shopping-cart"></i>
 
     </div>
  
 

 <div className='home'>
       {/* home */}
 <Link to='/'><i class="fas fa-home-alt"></i></Link>
   {/* shop */}
   {/* profile */}
   <Link to='/user/profile'> 
   <i class="fas fa-user-alt">
   </i>
</Link>
  </div>

         {/* Authentification */}

{
}


          
        </div>
    )
}

export default NavBar
