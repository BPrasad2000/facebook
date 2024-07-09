import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbarBox">
        <div className="nabarLeft">
            <span className="logo">facebook</span>
        </div>
        <div className="navbarCenter">
            <div className="searchbar">
                <SearchIcon className='searchIcon'/>
                <input placeholder='Search For your friend' className="searchInput" />
            </div>
        </div>
        <div className="navebarRight">
            <div className="navbarLinks">
                <span className="navbarLink">HomePage</span>
                <span className="navbarLink">Profile</span>
            </div>
            <div className="navebarIcons">
                <div className="navbarIcon">
                <PersonIcon/>
                <span className="iconTag">3</span>
                </div>
                <div className="navbarIcon">
                    <MessageIcon/>
                <span className="iconTag">5</span>
                </div>
                <div className="navbarIcon">
                    <SettingsIcon/>
                <span className="iconTag">1</span>
                </div>
            </div>
            <div className="pic">
                <img src="/image/1.png" alt="profilepic" className='profilPicImg'/>
            </div>
        </div>
    
    </div>
  )
}

export default Navbar