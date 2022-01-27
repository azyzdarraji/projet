import './LoginRegistre.css'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { register } from '../../redux/actions/authActions'
import { login } from '../../redux/actions/authActions'

function LoginRegistre ()
{

  const [formData,setFormData]=useState({fristname:"", lastname:"",email:"",password:""})
  const [formLogin,setFromLogin]=useState({email:"",password:""})

const navigate=useNavigate()
const dispatch=useDispatch()

// handleChange Registre
const handleChange=(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value})
}

 // handleChange Login 
 const handleChangeLogin=(e)=>{
  setFromLogin({...formLogin,[e.target.name]:e.target.value})
}
// handleSubmit Registre
const handleSubmit=(e)=>{
  e.preventDefault()
  dispatch(register(formData,navigate))
}

// handleSubmit  Login
const handleSubmitLogin=(e)=>{
  e.preventDefault()
  dispatch(login(formLogin,navigate))
}
    return(
        <div className="mainLoginRegistre">  	
        <input type="checkbox" id="chk" aria-hidden="true" className='inputLoginRegistre' />
        <div className="signup">
          <form onSubmit={handleSubmit}>

            <label htmlFor="chk" aria-hidden="true" className='labelLoginRegistre'> S'inscrire</label>
            <input  className='inputLoginRegistre' type="text" name="firstname" placeholder="First name" required onChange={handleChange}  />
            <input className='inputLoginRegistre' type="text" name="lastname" placeholder="Last name" required  onChange={handleChange}/>
            <input className='inputLoginRegistre' type="email" name="email" placeholder="Email" required  onChange={handleChange} />
            <input className='inputLoginRegistre' type="password" name="password" placeholder="Password" required onChange={handleChange}/>
            <button className='buttonLoginRegistre' type='submit'>s'inscrire</button>
            <div className="social-icons">
					<a href="#" className="social-login__icon fab fa-instagram"></a>
					<a href="#" className="social-login__icon fab fa-facebook"></a>
					<a href="#" className="social-login__icon fab fa-twitter"></a>
				</div>
          </form>
        </div>
        <div className="login">
          <form  onSubmit={handleSubmitLogin} > 
            <label  className='labelLoginRegistre' htmlFor="chk" aria-hidden="true" >Connexion</label>
            <input  className='inputLoginRegistre' type="email" name="email" placeholder="Email" required onChange={handleChangeLogin}/>
            <input className='inputLoginRegistre' type="password" name="password" placeholder="Password" required onChange={handleChangeLogin} />
            <button className='buttonLoginRegistre'>Connexion</button>
            <div className="social-icons">
					<a href="#" className="social-login__icon fab fa-instagram"></a>
					<a href="#" className="social-login__icon fab fa-facebook"></a>
					<a href="#" className="social-login__icon fab fa-twitter"></a>
				</div>
          </form>
        </div>
        
      </div>
    )
}
export default LoginRegistre