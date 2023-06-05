import React from 'react';
import "./online.css";

export default function Online({user}) {
  return (
    <div>
       <li className="rightfrnd">
            <div className="rightpcon">
              <img src={user.profile_Pic} alt="wms" className="rightpimg" />
              <span className="rightonline"></span>
            </div>
            <span className="rightuser">{user.user_name}</span> 
          </li>
          </div>
   
  )
}
