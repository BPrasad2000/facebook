import React from 'react'
import './RightPlane.css'
const RightPlane = () => {
  return (
    <div className='rightplaneBox'>
      <div className="rightplaneContainer">
        <div className="adContainer">
          <span className="aponsered">Sponsored</span>
          <img src="/image/a.png" alt="" className="adImage" />
          <span className="adText">
          Need something delivered quickly and safely? Look no further! Our delivery service ensures your packages arrive on time, every time.
          </span>
        </div>
        <hr />
        <div className="birthdayContainer">
          <img src="/image/birth.png" alt="" className="birthdayImage" />
          <span className="birthdayText">
            <b>Pasindu Chathuranga</b> and <b>2 others</b> having birthday today..!
            </span>
        </div>
        <hr/>
        <div className="contactcantainer">
        <span className="contact">Contact</span>
        </div>
        <div className="frendlist">
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/image/2.png" alt="" className="onlineFriendImg" />
              <span className="onlinestatus"></span>
            </div>
            <span className="onlineFriendName">Pasindu Chathuranga</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/image/3.png" alt="" className="onlineFriendImg" />
              <span className="onlinestatus"></span>
            </div>
            <span className="onlineFriendName">Madusha</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/image/4.jpg" alt="" className="onlineFriendImg" />
              <span className="onlinestatus"></span>
            </div>
            <span className="onlineFriendName">Ben</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/image/5.jpg" alt="" className="onlineFriendImg" />
              <span className="onlinestatus"></span>
            </div>
            <span className="onlineFriendName">Ruby</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/image/6.jpg" alt="" className="onlineFriendImg" />
              <span className="onlinestatus"></span>
            </div>
            <span className="onlineFriendName">Kavindu</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/image/7.jpg" alt="" className="onlineFriendImg" />
              <span className="onlinestatus"></span>
            </div>
            <span className="onlineFriendName">Alice</span>
          </li><li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/image/8.jpg" alt="" className="onlineFriendImg" />
              <span className="onlinestatus"></span>
            </div>
            <span className="onlineFriendName">Dean</span>
          </li>
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/image/9.jpg" alt="" className="onlineFriendImg" />
              <span className="onlinestatus"></span>
            </div>
            <span className="onlineFriendName">Nimal</span>
          </li>
        </div>
      </div>
    </div>
  )
}

export default RightPlane