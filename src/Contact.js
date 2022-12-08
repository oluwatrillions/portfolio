import React from 'react'
import './Contact.css'
import {FaLinkedin} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";
import {FaTwitterSquare} from "react-icons/fa";
import {FaGithubSquare} from "react-icons/fa";
import {FaPhoneSquare} from "react-icons/fa";

function Contact() {
    return (
        <div className='contact'>
            <section className='contact-sec'>
                <h1>Contact Me</h1>
                <p>I am based in <span>Lagos, Nigeria, and open to relocation</span>. If you have any questions to ask<br />
                or would like to work with me, I am reachable through any of<br />
                the below medium:</p>
            </section>
            <div className='form-section'>
                <section className='nav-links'>
                    <nav>
                        <ul>
                            <li>
                                <a href='https://www.linkedin.com/in/oluwatrillions/' target="_blank" rel="noreferrer"><FaLinkedin/></a>
                            </li>
                            <li>
                                <a href='https://www.instagram.com/oluwatrillion/' target="_blank" rel="noreferrer"><FaInstagramSquare /></a>
                            </li>
                            <li>
                                <a href='https://twitter.com/Oluwatrillions' target="_blank" rel="noreferrer"><FaTwitterSquare /></a>
                            </li>
                            <li> 
                                <a href='https://github.com/oluwatrillions' target="_blank" rel="noreferrer"><FaGithubSquare /></a>
                            </li>
                            <li>
                                <FaPhoneSquare />
                                <h4>+234 802 221 7867</h4>
                            </li>
                        </ul>
                    </nav>
                </section>
                <section className='form'>
                    <form >
                        <div className='name-section'>
                            <main className='name-sec'>
                                <label htmlFor='firstName'>First Name</label>
                                <input type='text' name='fname' value={''} />
                            </main>
                            <main className='name-sec'> 
                                <label htmlFor='LastName'>Last Name</label>
                                <input type='text' name='lname' value={''}/>
                            </main>
                        </div>
                        <div className='email-sec'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' name='email' value={''} />
                        </div>
                        <div className='msg-sec'>
                            <label htmlFor='text-area'>Enter your message here</label>
                            <textarea placeholder='Message'></textarea>
                        </div>
                        <button>Submit</button>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Contact
