import React from 'react'
import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material';
export default function Share() {
  return (
    <div className='share'>
      <div className='sharewrapper'>
        <div className="sharetop">
          <img src="./assets/img4.jpg" alt="" className="shareimg" />
          <input placeholder='whats on your mind?' type="text" className="shareinput" />
        </div>
        <hr className="sharehr" />
        <div className="sharebutton">SACHIN A D
          <div className="shareoptions">
            <div className="shareoption">
              <PermMedia htmlColor="tomato" className='sharemedia' />
              <span className="sharetext">PHOTO/VIDEO</span>
            </div>
            <div className="shareoption">
              <Label htmlColor="green" className='sharemedia' />
              <span className="sharetext">TAG</span>
            </div>
            <div className="shareoption">
              <Room htmlColor="blue" className='sharemedia' />
              <span className="sharetext">LOCATION</span>
            </div>
            <div className="shareoption">
              <EmojiEmotions htmlColor="red" className='sharemedia' />
              <span className="sharetext">FEELINGS</span>
            </div>
          </div>
          <button className="sharebotton">
            SHARE
          </button>
        </div>
      </div>
    </div>
  )
}
