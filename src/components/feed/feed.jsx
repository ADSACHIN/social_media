import React from 'react';
import "./feed.css";
import Share from '../share/share';
import Posts from '../posts/posts';
import { Post } from '../../dummydata';
function Feed() {
  return (
    <div className='feed'>
      <div className='feedwrapper'>
      <Share/>
      {Post.map((p)=>(
        <Posts key={p.id} Posts={p}/>
      ))}
      </div>
    </div>
  )
}

export default Feed
