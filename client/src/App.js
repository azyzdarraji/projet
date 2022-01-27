import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import './App.css';
import Header from './components/Header/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import LandPage from './pages/LandPage/LandPage'
import RayonsPage from './pages/RayonsPage/RayonsPage';
import Profile from './pages/Profile/Profile'
import NotFound from './pages/404Page'
import PrivateRoute from './router/PrivateRoute';
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { current } from './redux/actions/authActions';
import Alert from './components/alert/Alert';
import ProductCart from './components/ProductCart/ProductCart';
import ProductList from './pages/ProductList/ProductList';
import ProductDes from './components/ProductDes/ProductDes';
import UserList from './pages/UserList/UserList';
import AdminSettings from './pages/AdminSettings/AdminSettings';
import AdminProductList from './pages/adminProductList/AdminProductList';
import EditProfile from './pages/EditProfile/EditProfile';
import AddNewProduct from './pages/adminProductList/AddNewProduct';
import EditProduct from './pages/adminProductList/EditProduct';
import Shop from './pages/Shop/Shop';



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
    
    
    <Header/>
       
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

      <Route path='/user/productdes' element={
        <PrivateRoute>
          <ProductDes/>
        </PrivateRoute>
      } />
      <Route path='/user/rayons/productlist/:rayon' element={
        <PrivateRoute>
          <ProductList/>
        </PrivateRoute>
      } />

<Route path='/admin/userlist' element={
        <PrivateRoute>
          <UserList/>
        </PrivateRoute>
      } />

<Route path='/admin/productlist' element={
        <PrivateRoute>
          <AdminProductList/>
        </PrivateRoute>
      } />
 

 <Route path='/admin/addnewproduct' element={
       <PrivateRoute >
<AddNewProduct />
       </PrivateRoute>
      } /> 

      
<Route path='/admin/editproduct' element={
        <PrivateRoute>
          <EditProduct/>
        </PrivateRoute>
      } />
 

<Route path='/user/settings' element={
       <PrivateRoute >
<AdminSettings />
       </PrivateRoute>
      } /> 


<Route path='/user/editprofile' element={
       <PrivateRoute >
<EditProfile/>
       </PrivateRoute>
      } /> 

<Route path='/user/shop' element={
       <PrivateRoute >
<Shop/>
       </PrivateRoute>
      } />
      
       <Route path='*' element={<NotFound />} />

      </Routes>
      
   
    </BrowserRouter>
  );
}

export default App;
