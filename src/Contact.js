import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className='contact'>
            <p>I am based in <span>Lagos, Nigeria, and open to relocation</span>. If you have any questions to ask<br />
                or would like to work with me, I am reachable through any of<br />
                the below medium:</p>
            <div className='medium'>
                <div className='media'>
                    <img src="https://img.icons8.com/glyph-neue/64/000000/linkedin.png" alt='' />
                    <a href='https://www.linkedin.com/in/oluwatrillions/'>@oluwatrillions</a>
                </div>
                 <div className='media'>
                    <img src="https://img.icons8.com/ios-glyphs/48/000000/github.png" alt='' />
                    <a href='https://github.com/oluwatrillions'>@oluwatrillions</a>
                </div>
                 <div className='media'>
                    <img src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt='' />
                    <a href='https://twitter.com/Oluwatrillions'>@oluwatrillions</a>
                </div>
                 <div className='media'>
                    <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png" alt='' />
                    <a href='https://app.netlify.com/teams/oluwatrillions/overview'>@oluwatrillions</a>
                </div>
                 <div className='email'>
                    <img src="https://img.icons8.com/color/48/000000/yahoo-mail-app.png" alt='' />
                    <h4>ajosemichaeloluwatobi@yahoo.com</h4>
                </div>
                 <div className='email'>
                    <img src="https://img.icons8.com/color/50/000000/gmail-new.png" alt='' />
                    <h4>oluwatrillions44@gmail.com</h4>
                </div>
                <div className='email'>
                    <img src="https://img.icons8.com/ios/50/000000/apple-phone.png" alt='' />
                    <h4>+234 802 221 7867</h4>
                </div>
            </div>
            
        </div>
    )
}

export default Contact
