import React from 'react'
import Bg from '../bgellips/Bg'
import './AboutusTwo.scss'
import Card from './Card'

function AboutusTwo() {
    return (
       <div className="aboutus-two">
           <Bg
           width={"500px"}
           height={"500px"}
           left={"15%"}
           top={"15%"}
           />
           <Bg
           width={"400px"}
           height={"400px"}
           top={"60%"}
           left={"60%"}
           />
           <div className="aboutus-two-container">
                <Card
                heading={"TECHNOLOGY"}
                />
                <Card
                heading={"COMPANY"}
                />
                <Card
                heading={"OUR MISSION"}
                />
           </div>
       </div>
    )
}

export default AboutusTwo
