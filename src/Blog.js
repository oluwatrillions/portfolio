import React, {useState} from 'react'
import Blogpost from './Blogpost'
import './Blog.css'
import { FaComment } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";


const Blog = () => {

    const [blogCount, setBlogCount] = useState(0)
    
  return (
      <div className='blog-container'>
          <div className='blog-title'>
              {/* <h3>Welcome to my blogpost. Do have a great read.</h3> */}
              <h1>UNDER CONSTRUCTION</h1>
          </div>
          <div className='blog-lists'>
              <div className='left-side'>
                  
              </div>
              <section className='blog-page'>
                     <Blogpost />
                  <div className='response-tab'>
                        <div className='comment-section'>
                            <h4 className='comments'>Comments</h4>
                            <FaComment />
                            <h6 className='comment-count'>0</h6>
                        </div>      
                        <div className='likes-section'>
                            <h4>likes</h4>
                            <FaThumbsUp />
                            <h6 className='likes-count'>0</h6>
                      </div>
                      <div className='comment'>
                          <FaPlus />
                          <h3>Comment</h3>
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