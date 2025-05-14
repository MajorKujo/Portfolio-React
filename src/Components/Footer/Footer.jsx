import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
          <div className="footer-top-left">
            <img src="" alt=""/>
            <p>I am a frontend developer who just completed his degree. I am working on passion and practice projects as of now.</p>
          </div>
          <div className="footer-top-right">
            <div className="footer-email-input">
              <img src="" alt="" />
              <input type="email" placeholder='Enter your Email'/>
            </div>
            <div className="footer-subscribe">Subscribe</div>
          </div>
        </div>
        <hr/>
        {/* <div className="footer-bottom">
          <p className="footer-bottom-left"></p>
          <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Priivacy Policy</p>
            <p>Connect with me</p>
          </div>
        </div> */}
    </div>
  )
}

export default Footer