import React from 'react'
import './Bloglist.css'

const Bloglist = ({blogs}) => {
  return <div>
          {
              blogs.map((blog) => {
                  const { id, content, image, title } = blog
                  return <div className='blogs-div' key={id}>
                      <img src={image} alt={title}/>
                      <h3>{title}</h3>
                      <h6>{ content}</h6>
                  </div>
              })
          }
    </div>
}

export default Bloglist