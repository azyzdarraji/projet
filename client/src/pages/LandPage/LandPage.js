import './LandPage.css'
import Footer from '../../components/Footer/Footer'
import LoginRegistre from '../../components/LoginRegistre/LoginRegistre'
import { useSelector } from 'react-redux'

function LandPage(){
  const user=useSelector(state=>state.authReducer.user)

return (
    <div className="landpage">
       <div className="content-ld">
       
       
          <LoginRegistre /> :
         
      
       </div>
    <footer><Footer/></footer>

  </div>
)
}
export default LandPage
