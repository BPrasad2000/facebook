import React from 'react'
import './LeftPlane.css'
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import FlagIcon from '@mui/icons-material/Flag';
import BuildIcon from '@mui/icons-material/Build';

const LeftPlane = () => {
  return (
    <div className='leftplaneBox'>
      <div className="leftplaneContainer">
        <div className="leftplaneMenu">
          <li className="leftplaneMenuItem">
          <MarkUnreadChatAltIcon htmlColor='navy' className='leftpanelMenuIcon'/>
        <span className="leftplaneMenuText">Messages</span>
          </li>
          <li className="leftplaneMenuItem">
          <GroupsIcon htmlColor='blue' className='leftpanelMenuIcon'/>
        <span className="leftplaneMenuText">Groups</span>
          </li>
          <li className="leftplaneMenuItem">
          <RssFeedIcon htmlColor='' className='leftpanelMenuIcon'/>
        <span className="leftplaneMenuText">Feed</span>
          </li>
          <li className="leftplaneMenuItem">
          <FlagIcon htmlColor='orange' className='leftpanelMenuIcon'/>
        <span className="leftplaneMenuText">Pages</span>
          </li>
          <li className="leftplaneMenuItem">
          <CalendarMonthIcon htmlColor='' className='leftpanelMenuIcon'/>
        <span className="leftplaneMenuText">Events</span>
          </li>
          <li className="leftplaneMenuItem">
          <BuildIcon htmlColor='gray' className='leftpanelMenuIcon'/>
        <span className="leftplaneMenuText">Settings</span>
          </li>
          <li className="leftplaneMenuItem">
          <SportsEsportsIcon htmlColor='green' className='leftpanelMenuIcon'/>
        <span className="leftplaneMenuText">Games</span>
          </li>
          <li className="leftplaneMenuItem">
          <NewspaperIcon htmlColor='purple' className='leftpanelMenuIcon'/>
        <span className="leftplaneMenuText">News</span>
          </li>
          <li className="leftplaneMenuItem">
          <WorkOutlineIcon htmlColor='lime' className='leftpanelMenuIcon'/>
        <span className="leftplaneMenuText">Jobs</span>
          </li>
          <li className="leftplaneMenuItem">
          <AddShoppingCartIcon htmlColor='skyblue' className='leftpanelMenuIcon'/>
        <span className="leftplaneMenuText">Market</span>
          </li>
          <hr/>
          <div className="pagesyouliked">
            <h3>Pages you Liked</h3>
          </div>
          <div className="pagelist">
          <li className="pagelistItem">
            <img src="/image/g1.jpg" alt="" className="pagePic" />
            <span className="pageName">Photography page</span>
          </li>
          <li className="pagelistItem">
            <img src="/image/g2.jpg" alt="" className="pagePic" />
            <span className="pageName">Travel page</span>
          </li>
          <li className="pagelistItem">
            <img src="/image/g3.jpg" alt="" className="pagePic" />
            <span className="pageName">Music page</span>
          </li>
          <li className="pagelistItem">
            <img src="/image/g4.jpg" alt="" className="pagePic" />
            <span className="pageName">Unity page</span>
          </li>
          <li className="pagelistItem">
            <img src="/image/g5.jpg" alt="" className="pagePic" />
            <span className="pageName">Programmer page</span>
          </li>
          <li className="pagelistItem">
            <img src="/image/g6.png" alt="" className="pagePic" />
            <span className="pageName">React page</span>
          </li>
          <li className="pagelistItem">
            <img src="/image/g7.png" alt="" className="pagePic" />
            <span className="pageName">Community</span>
          </li>
          <li className="pagelistItem">
            <img src="/image/g8.png" alt="" className="pagePic" />
            <span className="pageName">cyber security</span>
          </li>
          <li className="pagelistItem">
            <img src="/image/g9.png" alt="" className="pagePic" />
            <span className="pageName">Chat</span>
          </li>
          <li className="pagelistItem">
            <img src="/image/g10.png" alt="" className="pagePic" />
            <span className="pageName">Mobile Page</span>
          </li>
          <li className="pagelistItem">
            <img src="/image/g11.png" alt="" className="pagePic" />
            <span className="pageName">Front end developer</span>
          </li>
          <li className="pagelistItem">
            <img src="/image/g12.png" alt="" className="pagePic" />
            <span className="pageName">Devolopers</span>
          </li>
          <li className="pagelistItem">
            <img src="/image/g13.png" alt="" className="pagePic" />
            <span className="pageName">artificial intelligence</span>
          </li>
          <li className="pagelistItem">
            <img src="/image/g14.png" alt="" className="pagePic" />
            <span className="pageName">Java Programmer</span>
          </li>
          <li className="pagelistItem">
            <img src="/image/g15.png" alt="" className="pagePic" />
            <span className="pageName">HTML CSS</span>
          </li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftPlane