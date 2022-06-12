import React from 'react'
import Aboutus from '../../Components/Aboutus/Aboutus'
import AboutusTwo from '../../Components/AboutusTwo/AboutusTwo'
import FreeCode from '../../Components/FreeCodeRepoSection/FreeCode'
import Hero from '../../Components/Hero/Hero'
import ReadyToSee from '../../Components/ReadyToSeeSection/ReadyToSee'
import Service from '../../Components/Service/Service'
import Footer from '../../Components/Footer/Footer'
import Subscribe from '../../Components/SubscribeSection/Subscribe'

function Home() {
    return (
        <div className='home'>
            <Hero />
            <Service/>
            <Aboutus/>
            <AboutusTwo/>
            <FreeCode/>
            <ReadyToSee/>
            <Subscribe/>
            <Footer/>
        </div>
    )
}

export default Home
