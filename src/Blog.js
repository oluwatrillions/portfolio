import React from 'react'
import Blogpost from './Blogpost'
import './Blog.css'


const Blog = () => {
  return (
      <div className='blog-container'>
          <div className='blog-title'>
              <h3>Welcome to my blogpost. Do have a great read.</h3>
              <h1>UNDER CONSTRUCTION</h1>
          </div>
          <div className='blog-lists'>
              <div className='left-side'>
                  
              </div>
              <section className='blog-page'>
                     <Blogpost />
                  <div className='response-tab'>
                      <div>
                          <h4>comments</h4>
                          <img src='' alt=''/>
                      </div>
                      <div>
                          <h4>likes</h4>
                          <img src='' alt=''/>
                      </div>
                  </div>
              </section>
              <div className='right-side'>
                  
              </div>
          </div>
      </div>
  )
}

export default Blog