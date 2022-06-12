import React from 'react'
import './Bg.scss'

function Bg({top,left,width,height}) {
    const styles ={
        width: width,
        height: height,
        top:top,
        left:left
    }
    return (
        <div style={styles} className='bg'>
        </div>
    )
}

export default Bg
