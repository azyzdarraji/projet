import './ProductDes.css'
import {useNavigate} from 'react-router-dom'
import {useDispatch ,useSelector} from 'react-redux'

import { addtoshop, getoneproduct}from '../../redux/actions/productActions'

function ProductDes ()
{ 
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const product=useSelector(state=>state.productReducer.product)

    return (
      <div className="card my-5 py-4" style={{width:"18rem"}}>
      {/* <img src={item.img} className="card-img-top" alt={item.title}  height="200px"/> */}
      <div className="card-body text-center">
        <h2 className="card-title">{product.name}</h2>
        <h4 className="lead">
          {product.prix}
        </h4>
        <p className="lead">
          {product.prix}
        </p>
      
        
      </div>
      
    <button  className='bt-2'  onClick={()=>{dispatch(getoneproduct(product._id)) ; navigate("/user/rayons")}}>  return to rayon</button>
    <button className='bt-2'  onClick={()=>{dispatch(addtoshop(product._id))}}> ADD TO SHOP </button>
    </div>
    )
    
}
export default ProductDes