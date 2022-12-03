import React from 'react'
import Bloglist from './Bloglist'
import './Blog.css'


const Blog = () => {
  return (
      <div className='blog-container'>
          <div className='blog-title'>
                Welcome to my blogpost. Do have a great read.
          </div>
          <div className='blog-lists'>
              <div className='left-side'>
                  
              </div>
              <section className='blog-page'>
                     <Bloglist />
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