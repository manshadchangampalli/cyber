import React from 'react'
import './Aboutus.scss'
import img from '../../Assets/Aboutus/aboutussmall.png'

function Aboutus() {
    return (
        <div className="aboutus">
            <div className="aboutus-container">
                <img src={img} alt="" />
                <div className="aboutus-content">
                    <h1>Improve your security posture</h1>
                    <p>The world of technology is continuously evolving, from the rise in the Internet of Things (IoT) through the adoption of Software as a Service (SaaS) over traditional in-house applications. And as technologies shift, so does the threat landscape. Yet many organizations adapt their technology without guidance or direction from IT, information security, procurement, or risk specialists.</p>
                    <button>view more</button>
                </div>
            </div>
        </div>
    )
}

export default Aboutus
