import React {useState} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
    const Toggle = () => {
    const [style, setStyle]=('.')
}

    return (
        <div className='header'>
            <header>
                <nav>
                    <ul>
                        <Link to="/"><li>HOME</li></Link>
                       <Link to="/about"> <li>ABOUT</li></Link>
                        <Link to="/projects"><li>PROJECTS</li></Link>
                        <Link to='/contact'><li>CONTACT ME</li></Link>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header
