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
          <MarkUnreadChatAltIcon className='leftpanelMenuIcon'/>
        <span className="leftplaneMenuText">Messages</span>
          </li>
          <li className="leftplaneMenuItem">
          <GroupsIcon className='leftpanelMenuIcon'/>
        <span className="leftplaneMenuText">Groups</span>
          </li>
          <li className="leftplaneMenuItem">
          <RssFeedIcon className='leftpanelMenuIcon'/>
        <span className="leftplaneMenuText">Feed</span>
          </li>
          <li className="leftplaneMenuItem">
          <FlagIcon className='leftpanelMenuIcon'/>
        <span className="leftplaneMenuText">Pages</span>
          </li>
          <li className="leftplaneMenuItem">
          <CalendarMonthIcon className='leftpanelMenuIcon'/>
        <span className="leftplaneMenuText">Events</span>
          </li>
          <li className="leftplaneMenuItem">
          <BuildIcon className='leftpanelMenuIcon'/>
        <span className="leftplaneMenuText">Settings</span>
          </li>
          <li className="leftplaneMenuItem">
          <SportsEsportsIcon className='leftpanelMenuIcon'/>
        <span className="leftplaneMenuText">Games</span>
          </li>
          <li className="leftplaneMenuItem">
          <NewspaperIcon className='leftpanelMenuIcon'/>
        <span className="leftplaneMenuText">News</span>
          </li>
          <li className="leftplaneMenuItem">
          <WorkOutlineIcon className='leftpanelMenuIcon'/>
        <span className="leftplaneMenuText">Jobs</span>
          </li>
          <li className="leftplaneMenuItem">
          <AddShoppingCartIcon className='leftpanelMenuIcon'/>
        <span className="leftplaneMenuText">Market</span>
          </li>
          <hr/>
          <div className="pagesyouliked">
            <h3>Pages you Liked</h3>
          </div>
          <div className="pagelist">
          <li className="pagelistItem">
            <img src="/image/1.png" alt="" className="pagePic" />
            <span className="pageName">bike page</span>
          </li>
          <li className="pagelistItem">
            <img src="/image/1.png" alt="" className="pagePic" />
            <span className="pageName">bike page</span>
          </li>
          <li className="pagelistItem">
            <img src="/image/1.png" alt="" className="pagePic" />
            <span className="pageName">bike page</span>
          </li>
          <li className="pagelistItem">
            <img src="/image/1.png" alt="" className="pagePic" />
            <span className="pageName">bike page</span>
          </li>
          <li className="pagelistItem">
            <img src="/image/1.png" alt="" className="pagePic" />
            <span className="pageName">bike page</span>
          </li>
          <li className="pagelistItem">
            <img src="/image/1.png" alt="" className="pagePic" />
            <span className="pageName">bike page</span>
          </li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftPlane