import React from 'react'
import './FreeCode.scss'
import Itmes from './Itmes'
import img from '../../Assets/freecode/bgspiral.png'
import Bg from '../bgellips/Bg'

function FreeCode() {
    return (
        <div className="free-code">
            <div className="free-code-container">
                <div className="left-sec">
                    <img className='bg-spiral' src={img} alt="" />
                    <h1>free code repo risk assessment</h1>
                    <button>Book A demo</button>
                </div>
                <div className="right-sec">
                    <Itmes/>
                    <Itmes/>
                    <Itmes/>
                </div>
            </div>
            <Bg
            width={"300px"}
            height={"300px"}
            top={"40%"}
            left={0}
            />
        </div>
    )
}

export default FreeCode
