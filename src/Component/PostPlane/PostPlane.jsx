import React from 'react'
import './PostPlane.css'
import AddPost from '../AddPost/AddPost'
import Post from '../Post/Post'

const PostPlane = () => {
  return (
    <div className='postplaneBox'>
      <AddPost/>
      <Post/>
    </div>
  )
}

export default PostPlane