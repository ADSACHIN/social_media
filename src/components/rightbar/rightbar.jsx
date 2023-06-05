import React from 'react'
import "./rightbar.css";
import { Users } from '../../dummydata';
import Online from '../online/online';

function Rightbar({ profiles }) {
      // const PF=process.env.REACT_APP_PUBLIC_FOLDER;

  const Homerightbar = () => {
    return (
      <>
        <div className="birthcon">
          <img src="https://robohash.org/reiciendisutpraesentium.png?size=50x50&set=set1" alt="" className="birthimg" />
          <span className="birthtext">
            <b>u other</b>and<b> every one</b>have birthday
          </span>
        </div>
        <img src="./assets/img5.gif" alt="" className="rightbarad" />
        <h4 className="rightbartitle">online friends</h4>
        <ul className="rightfrndlist">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  };
  const Profilerightbar = () => {
    return (
      <>
        <h2 className="rightbartitle">user info</h2>
        <div className="rightbarinfo">

          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">city</span>
            <span className="rightbarinfovalue">york</span>
          </div>

          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">from</span>
            <span className="rightbarinfovalue">madrid</span>
          </div>
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">relation</span>
            <span className="rightbarinfovalue">sigle</span>
          </div>
        </div>
        <h2 className="rightbartitle">user friends</h2>
        <div className="rightbarfolls">
          <div className="rightbarfoll">
            <img src="http://localhost:3000/assets/dem.jpg" alt="" className="rightbarfollimg" />
            <span className="rightbarfollname">swdffsdf</span>
          </div>
          <div className="rightbarfoll">
            <img src="http://localhost:3000/assets/dem.jpg" alt="" className="rightbarfollimg" />
            <span className="rightbarfollname">swdffsdf</span>
          </div>
          <div className="rightbarfoll">
            <img src="http://localhost:3000/assets/dem.jpg" alt="" className="rightbarfollimg" />
            <span className="rightbarfollname">swdffsdf</span>
          </div>
          <div className="rightbarfoll">
            <img src="" alt="" className="rightbarfollimg" />
            <span className="rightbarfollname"></span>
          </div>
          <div className="rightbarfoll">
            <img src="" alt="" className="rightbarfollimg" />
            <span className="rightbarfollname"></span>
          </div>
          <div className="rightbarfoll">
            <img src="" alt="" className="rightbarfollimg" />
            <span className="rightbarfollname">swdffsdf</span>
          </div>

        </div>

      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarwrapper">
        { profiles?<Profilerightbar />:<Homerightbar/>}
      </div>
    </div>
  )
}

export default Rightbar;
