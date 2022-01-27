import React from "react";
import { useSelector } from "react-redux";
import './Profile.css'

function Profile(){
const user=useSelector(state=>state.authReducer.user)
return (
  <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
        <div className="card p-4">
          <div className=" image d-flex flex-column justify-content-center align-items-center"> <button className="btn btn-secondary"> <img src="https://i.imgur.com/wvxPV9S.png" height={100} width={100} /></button> <span className="name mt-3">{user && user.firstname}</span> <span className="idd"> {user && user.lastname}</span>
            <div className="d-flex flex-row justify-content-center align-items-center gap-2"> <span className="idd1">{user&& user.email}</span> <span><i className="fa fa-copy" /></span> </div>
            <div className=" d-flex mt-2"> <button className="btn1 btn-dark">Edit Profile</button> </div>
          </div>
        </div>
      </div>
)
}


export default Profile