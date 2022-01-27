import {
    getallusers,
    getoneuser,
    deleteuser,
  } from "../../redux/actions/userActions"
  import "./CardUser.css";
  import { useDispatch } from "react-redux";
  import { useNavigate } from "react-router-dom";
  
  function CardUser({ user }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const deletUser = () => {
    //   if (window.confirm("are you sure ")) {
    //     dispatch(deleteuser(user._id));
    //   }
    // };
    return (
      <div>
        <table>
          <tr>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
            <td>
              
          
              <button className="btn2"  onClick={()=>dispatch(deleteuser(user._id))} >
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
  export default CardUser;