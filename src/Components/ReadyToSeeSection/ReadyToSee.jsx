import React from 'react'
import Bg from '../bgellips/Bg'
import './ReadyToSee.scss'

function ReadyToSee() {
    return (
        <div className="ready-to-see">
            <Bg
            width={"300px"}
            height={"300px"}
            top={"10%"}
            left={"30%"}
            />
            <h1>Ready to see how Cyber Security Services can help?</h1>
            <p>Need a hand with your security program? <br /> Let our cyber security experts help.</p>
            <button>GET START NOW</button>
        </div>
    )
}

export default ReadyToSee
