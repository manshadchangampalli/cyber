import React from 'react'
import logo from '../../Assets/Hero/image 3.png'
import instagram from '../../Assets/footer/instagram.png'
import facebook from '../../Assets/footer/facebook.png'
import twitter from '../../Assets/footer/twitter.png'
import linkedin from '../../Assets/footer/linkedin.png'
import './Footer.scss'

function Footer() {
    return (
        <div className="footer">
            <div className="main">
                <div className="address">
                    <img src={logo} alt="" />
                    <p>Business Address: 752 N. State Street #172, Westerville, Ohio, 43082, <br /> US |Tel: 1-800-390-1053 <br /> URL: https://www.cybersecurityservices.com| <br /> Email: sales@cybersecurityservices.com. 24 Hours / 7 Days A Week <br />Cyber Security Services Rated 5 / 5 based on 5 reviews. </p>
                </div>
                <ul className="footer-home">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Career</li>
                </ul>
                <ul className="footer-help">
                    <li>help</li>
                    <li>service</li>
                    <li>support</li>
                    <li>faq</li>
                </ul>
                <div className="sm-icons">
                    <img src={twitter} alt="" />
                    <img src={instagram} alt="" />
                    <img src={facebook} alt="" />
                    <img src={linkedin} alt="" />
                </div>
            </div>
            <div className="copyright">
                copyright@2022
            </div>
        </div>
    )
}

export default Footer
