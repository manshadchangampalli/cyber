import React from 'react'
import Card from './Card'
import './Service.scss'
import bug from '../../Assets/Service/bug.png'
import code from '../../Assets/Service/code-review.png'
import operator from '../../Assets/Service/operator.png'
import whiteHat from '../../Assets/Service/white-hat.png'
import Bg from '../bgellips/Bg'


function Service() {
    return (
        <div className='service'>
            <Bg
            width={"300px"}
            height={"200px"}
            top={"100px"}
            left={"40%"}
            />
            <h1 className="service-heading">Services</h1>
            <div className="services">
                <Bg
                width={"100%"}
                height={"150%"}
                top={0}
                left={0}
                />
                <Card
                img={code}
                text=" Code Review"
                />
                <Card
                img={bug}
                text="Bug Bounty"
                />
                <Card
                img={whiteHat}
                text="Penetration test"
                />
                <Card
                img={operator}
                text="consultancy"
                />
            </div>
        </div>
    )
}

export default Service
