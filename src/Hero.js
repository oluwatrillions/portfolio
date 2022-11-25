import React from 'react'
import './Hero.css'
// import photo from './images/pp.jpeg'
import {Link} from 'react-router-dom'

function Hero() {
    return (
        <div className='hero'>
            <div className='intro'>
                <h1>Hello, I am <span className='my-name'>Ajose Michael Oluwatobi</span>. <br /> I am a FullStack Web Developer.</h1>
            </div>
            <div className='pages'>
                <div className='orange'>
                    <div className='purple'>
                        <div className='green'>
                             <nav>
                                <ul>
                                    <Link to="/about"> <li><button>about</button></li></Link>
                                    <Link to="/projects"><li><button>view my work</button></li></Link>
                                    <Link to='/contact'><li><button>contact me</button></li></Link>
                                    <Link to="/blog"><li><button>blog</button></li></Link>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
