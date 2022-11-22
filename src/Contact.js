import React from 'react'
import './Contact.css'
import linkedin from './images/linkedin.png'
import github from './images/github.png'
import twitter from './images/twitter.png'
import yahoo from './images/yahoo.png'
import instagram from './images/instagram.png'
import phone from './images/phone.png'

function Contact() {
    return (
        <div className='contact'>
            <p>I am based in <span>Lagos, Nigeria, and open to relocation</span>. If you have any questions to ask<br />
                or would like to work with me, I am reachable through any of<br />
                the below medium:</p>
            <div className='medium'>
                <div className='media'>
                    <img src={linkedin} alt='' />
                    <a href='https://www.linkedin.com/in/oluwatrillions/'>@oluwatrillions</a>
                </div>
                 <div className='media'>
                    <img src={github} alt='' />
                    <a href='https://github.com/oluwatrillions'>@oluwatrillions</a>
                </div>
                 <div className='media'>
                    <img src={twitter} alt='' />
                    <a href='https://twitter.com/Oluwatrillions'>@oluwatrillions</a>
                </div>
                 <div className='media'>
                    <img src={instagram} alt='' />
                    <a href='https://instagram.com/oluwatrillion'>@oluwatrillions</a>
                </div>
                 <div className='email'>
                    <img src={yahoo} alt='' />
                    <h4>ajosemichaeloluwatobi@yahoo.com</h4>
                </div>
                 <div className='email'>
                    <img src="https://img.icons8.com/color/50/000000/gmail-new.png" alt='' />
                    <h4>oluwatrillions44@gmail.com</h4>
                </div>
                <div className='email'>
                    <img src={phone} alt='' />
                    <h4>+234 802 221 7867</h4>
                </div>
            </div>
            
        </div>
    )
}

export default Contact
