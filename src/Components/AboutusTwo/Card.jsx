import React from 'react'
import  arrow from '../../Assets/Aboutus2/arrow.png'

function Card({heading}) {
    return (
        <div  className="aboutus-card">
            <h1>{heading}</h1>
            <p>The world of technology is continuously evolving, from the rise in the Internet of Things (IoT) through the adoption of Software</p>
            <button>
                <img src={arrow} alt="" />
            </button>
        </div>
    )
}

export default Card
