import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Hero.scss'

function Hero() {
    return (
       <div className="hero">
           <Navbar/>
           <div className="main-section">
               <h1 className='hero-heading'>CYBER SECURITY <br /> SERVICES</h1>
               <button className="hero-button">Get Start Now</button>
           </div>
       </div>
    )
}

export default Hero
