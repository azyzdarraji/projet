import { deleteContat, getContact, toggleTrue } from '../../redux/actions/ActionsContact'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Product ({contact})
{ const dispatch=useDispatch()
  const navigate=useNavigate()
    return (
        <div className="container">
        <div className="card">
          <div className="imgBx">
            <img src={image} alt="aziz"/>
          </div>
          <div className="contentBx">
            <h2> {contact.name} </h2>
            <div className="size">
              <h3>{contact.email}</h3>
            </div>
            <div className="color">
              <h3>{contact.age}</h3>
              
            </div>
            <div className='button'>
            <button onClick={()=>dispatch(deleteContact(contact._id))} >Delete</button> 
            <button onClick={()=>{dispatch(getContact(contact._id));dispatch(toggleTrue());navigate('/addEdit')}}>
              Edit </button></div>
          
          </div>
        </div>
      </div>
    )
    
}
export default Product