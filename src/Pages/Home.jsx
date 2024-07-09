import React from 'react'
import Navbar from '../Component/Navigation/Navbar'
import LeftPlane from '../Component/LeftPlane/LeftPlane'
import PostPlane from '../Component/PostPlane/PostPlane'
import RightPlane from '../Component/RightPlane/RightPlane'
import './Home.css'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="bottomContainer">
    <LeftPlane/>
    <PostPlane/>
    <RightPlane/>
    </div>
    </>
  )
}

export default Home