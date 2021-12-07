import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <header>
                <nav>
                    <ul>
                        <Link to="/"><li>HOME</li></Link>
                       <Link to="/about"> <li>ABOUT</li></Link>
                        <Link to="/projects"><li>PROJECTS</li></Link>
                        <li>CONTACT ME</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header
