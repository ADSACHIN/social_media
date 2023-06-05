import React from 'react'
import "./profile.css";
import Topbar from "../../components/topbar/topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";

export default function Profile() {
  return (
    
        <>
        <Topbar />
       <div className="profile">
           <Sidebar/>
           <div className="profileright">
            <div className="profilertop">
                <div className="profilecover">
                <img src="http://localhost:3000/assets/img1.bmp" alt="" className="profilecoverimg" />
           <img src="http://localhost:3000/assets/img2.bmp" alt="" className="profileuserimg" />
           </div>
           <div className="profileinfo">
            <h4 className="profilename">sac</h4>
            <span className="profiledesc">detail</span>
           </div>
            </div>
            <div className="profilerbottom">
           <Feed/>
           <Rightbar profiles/>
           </div>
           </div>
        </div>
        </>
    
  )
}
