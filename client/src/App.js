import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar'
import LandPage from './pages/LandPage/LandPage'
import RayonsPage from './pages/RayonsPage/RayonsPage';
import Profile from './pages/Profile/Profile'
import NotFound from './pages/404Page'
import PrivateRoute from './router/PrivateRoute';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { current } from './redux/actions/authActions';
import Alert from './components/alert/Alert';
import PetitDej from './pages/RayonsPage/PetitDej/PetitDej';
import Pate from './pages/RayonsPage/Pate/Pate';
import ProduitNettoyage from './pages/RayonsPage/ProduitNettoyage/ProduitNettoyage';
import Electromenager from './pages/RayonsPage/Electromenager/Electromenager';

function App() {
const dispatch=useDispatch()
  useEffect(()=>{
    if(localStorage.getItem('token')){
      dispatch(current())
      // yasta7feh bel user fi la7tha athika
    }
  },[])
  
  return (
    <BrowserRouter>
    <div className="App">
    <div className='headerApp'> 
    <Header/>
    <NavBar/> 
    </div>
    
     <Alert />
     <Routes>
       <Route path='/' element={<LandPage />} />
       <Route path='/user/profile' element={
       <PrivateRoute >
<Profile />
       </PrivateRoute>
      } /> 

<Route path='/user/rayons' element={
       <PrivateRoute >
       <RayonsPage />
       </PrivateRoute>
      } />


      <Route path='/user/rayons/petitdej' element={
      <PrivateRoute>
       <PetitDej/>   
      </PrivateRoute>
      } />


      <Route path='/user/rayons/pate' element={
      <PrivateRoute>
        <Pate/>
      </PrivateRoute>
      } />

      <Route path='/user/rayons/produitnettoyage' element={
        <PrivateRoute>
    <ProduitNettoyage/>
        </PrivateRoute>
      } />


      <Route path='/user/rayons/electromenager' element={
      <PrivateRoute>
       <Electromenager/>
      </PrivateRoute>
      } />
      
       <Route path='*' element={<NotFound />} />

      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
