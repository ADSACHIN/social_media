import React, { useState } from 'react'
import "./posts.css";
import { MoreVert } from '@mui/icons-material';
import { Users } from '../../dummydata';

export default function Posts({Posts}) {
//    const  user=Users.filter(u=>u.id===1)
//      console.log(user[0].user_name);
    // console.log("eachpost",Posts);
    const [likes,setlikes]=useState(Posts.like);
    const [islikes,setislikes]=useState(false);
    // const PF=process.env.REACT_APP_PUBLIC_FOLDER;
    const clickhandle=()=>
    {
        setlikes(islikes?likes-1:likes+1);
        setislikes(!islikes);
    }
    return (
        <div className='post'>
            <div className="postwrapper">
                <div className="posttop">
                    <div className="posttopleft">
                        <img className='postimg' src={Users.filter((u)=>u.id===Posts.id)[0].profile_Pic} alt="asd" />
                        <span className="postusername">{Users.filter((u)=>u.id===Posts.id)[0].user_name}</span>
                        <span className="postdate">{Posts.date} ago</span>
                    </div>
                    <div className="posttopright">
                        <MoreVert />
                    </div>
                </div>
                <div className="postcentre">
                    <span className="posttext">{Posts.desc}</span>
                    {/* <img src={PF+Posts.photo} alt="a" className="postimge" /> */}

                    <img src={Posts.photo} alt="a" className="postimge" />
                </div>
                <div className="postbottom">
                    <div className="postbtleft">
                        <img src="./assets/icons8-like.gif" alt="" className="likeicon" onClick={clickhandle} />
                        <img src="./assets/icons8-heart-with-arrow.gif" alt="" className="likeicon" onClick={clickhandle} />
                       <span className="postlikecount"> {likes}  PEOPLE LIKED IT</span>
                    </div>
                    <div className="postbtright">
                        <span className="postctext"> {Posts.comment}  COMMENTS</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
