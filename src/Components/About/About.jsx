import React from 'react'
import './About.css'
import about_img from'../../assets/portfoliopic2.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src="" alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                {/* <img src={about_img} alt="" /> */}
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a fresher who is looking to build their career in web and software development.</p>
                    <p>My passion is frontend development, with an eye for a creative output in the work I put in.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS <hr style={{width:"50%"}}/></p></div>
                    <div className="about-skill"><p>JavaScript <hr style={{width:"50%"}}/></p></div>
                    <div className="about-skill"><p>ReactJS <hr style={{width:"50%"}}/></p></div>
                    <div className="about-skill"><p>Unity3D <hr style={{width:"50%"}}/></p></div>
                    <div className="about-skill"><p>Unreal Engine <hr style={{width:"50%"}}/></p></div>
                </div>
            </div>
        </div>
        {/* <div className="about-achievements">
            <div className="about-achievement">

            </div>
        </div> */}
    </div>
  )
}

export default About