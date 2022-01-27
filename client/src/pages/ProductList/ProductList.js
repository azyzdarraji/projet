import { useEffect } from 'react'
import './ProductList.css'
import ProductCart from '../../components/ProductCart/ProductCart'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getAllProducts } from '../../redux/actions/productActions'
function ProductList()
{

  const {rayon}=useParams()
const dispatch=useDispatch()
const products=useSelector(state=>state.productReducer.products)
useEffect(()=>{
    dispatch(getAllProducts(rayon))
},[])

  return (
      <div className='listproduct'>
            {products.map(product=><ProductCart  key={product._id} product={product}/>)}
      </div>
  )
}
export default ProductList