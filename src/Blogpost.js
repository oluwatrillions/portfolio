import React from 'react'
import Bloglist from './Bloglist'
import blogs from './BlogpostData'

const Blogpost = () => {
  return (
      <div><Bloglist blogs={blogs} /></div>
  )
}

export default Blogpost