import React from 'react'
import './Hero.css'
import profile_img from'../../assets/portfoliopic.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>Hi. I'm Mishal, </span>frontend developer based in India</h1>
        <p>I am a frontend developer, who is a fresher, and is excited about working with the prospects of web development</p>
        <div className="hero-action">
          <AnchorLink className='anchor-link' offset={50} href='#contact'><div className="hero-connect">Connect with me</div></AnchorLink>
          <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero