import React from 'react';
import "./friend.css";
export default function Friend({user}) {
  return (
    <div>
       <li className="sidefrnd">
                        <img src={user.profile_Pic} alt="user" className="sidefrndimg" />
                        <span className="sidefrndname">{user.user_name}</span>
                    </li>
    </div>
  )
}
