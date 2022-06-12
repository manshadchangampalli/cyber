import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import logo from '../../Assets/Hero/image 3.png'

function Navbar() {
    // used for store scroll value 
    const [scroll, setScroll] = useState(0)
    const scrollHandler = () =>{
        setScroll(window.scrollY)
    }
    useEffect(()=>{
        window.addEventListener('scroll',scrollHandler)
    },[])
    return (
        <div style={scroll>50?{background:"#041E20"}:{background:"transparent"}} className='navbar'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul  className="nav-items">
                <li className='nav-item nav-item-1'>Services</li>
                <li className='nav-item nav-item-2'>Industries</li>
                <li className='nav-item nav-item-3'>Aboutus</li>
                <li className='nav-item nav-item-4'>Contact</li>
                <li className='nav-item nav-item-5'>Career</li>
            </ul>
        </div>
    )
}

export default Navbar
