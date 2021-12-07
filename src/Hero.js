import React from 'react'
import './Hero.css'
import photo from './images/pp.jfif'
import {Link} from 'react-router-dom'

function Hero() {
    return (
        <div className='hero'>
            <h1>Hello, I'm <span>Ajose Michael Oluwatobi</span>. <br /> I am a Frontend Web Developer.</h1>
          <Link to='/projects'><button>View my work</button></Link>
            <img className='pp' src={photo} alt=""/>
        </div>
    )
}

export default Hero
