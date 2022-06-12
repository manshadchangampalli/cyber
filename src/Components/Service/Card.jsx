import React from 'react'
import Bg from '../bgellips/Bg'

function Card({img,text}) {
    return (
        <div className='card'>
            <Bg
            width={"200px"}
            height={"150px"}
            top={"0"}
            left={'0'}
            />
            <img src={img} alt="" />
            <p>{text }</p>
        </div>
    )
}

export default Card
