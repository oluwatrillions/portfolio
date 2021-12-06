import React from 'react'
import images from './images/backg.jpg'
import './Hero.css'

function Hero() {
    return (
        <div className='hero'>
            <img src={images} alt='' />
            <h1>Hello, I'm <span>Ajose Michael Oluwatobi</span>. <br /> I am a Frontend Web Developer.</h1>
            <button>View my work</button>
        </div>
    )
}

export default Hero
