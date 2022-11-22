import React from 'react'
import './About.css'
import javascript from './images/javascript.png'
import reactjs from './images/react.png'
import nodejs from './images/nodeja.png'
import expressjs from './images/express.png'
import git from './images/github.webp'
import html from './images/html.png'
import css from './images/css.jpg'
import mongo from './images/mongo.png'

function About() {
    return (
        <div className='about'>
            <div className='bio'>
                <p>My name is <span>Toby</span>, and I am a self-taught <span>FullStack Developer</span>. <br />I started my
                    Frontend Journey in 2021, before which I learned<br /> <span>Cloud Technology</span> being a recipient
                    of the <span>Google Africa Developer Scholarship</span><br /> for <span>3 years</span>,
                    with knowledge in <span>Google Cloud Platform and AWS</span>.
                <br />

                    I have a background in <span>Accounting</span> from the university,<br />
                    and worked in said field for years, until I transitioned<br />
                    into Tech, and proceeded to learning and gaining knowledge<br />
                    in different parts of my new field.
                <br />

                    My affinity for tech expresses itself in so many ways: coding as<br />
                    much as I can everyday, reading tech journals, reading other<br />
                    people's codes, building projects, learning about new technologies,<br />
                    and anticipating future technologies.
                <br />
                    I am an avid and a <span>perpetual learner</span>, and it's one of<br />
                    the things that interest me the most. Technology fascinates<br />
                    me, so i'm easily drawn to read or learn about new technologies,<br />
                    while improving on the ones I already know.</p>
            </div>
            <section className='section'>
                <main>
                    <img src={javascript} alt='' />
                    <img src={nodejs} alt='' />
                    <img src={reactjs} alt='' />
                    <img src={html} alt='' />
                    <img src={expressjs} alt='' />
                    <img src={git} alt='' />
                    <img src={css} alt='' />
                    <img src={mongo} alt='' />
                </main>
            </section>
        </div>
    )
}

export default About
