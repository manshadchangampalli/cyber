import React from 'react'
import './Subscribe.scss'
import arrow from '../../Assets/subscribe/arrow (1).png'

function Subscribe() {
    return (
        <div className='subscribe'>
            <h1>EMAIL ALERTS</h1>
            <p>Email Address require*</p>
            <div className="email-input">
                <button>
                    SUBSCRIBE NOW
                    <img src={arrow} alt="" /> 
                    </button>
                <input type="email" placeholder='ENTER YOUR EMAIL' />
            </div>
        </div>
    )
}

export default Subscribe
