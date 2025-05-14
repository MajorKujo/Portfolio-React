import React from 'react'
import './Contact.css'
import {ReactComponent as PhoneImg} from '../../assets/phone-call.svg'
import {ReactComponent as MailImg} from '../../assets/envelope.svg'
import {ReactComponent as LinkedIn} from '../../assets/linkedin.svg'


const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "035f8719-29c2-4049-bad9-320da2ce754f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert(data.message)
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

  };
  return (
    <div id="contact" className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src="" alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently availible to take on projects or provide assitance, so feel free to contact me</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <MailImg style={{width: 14, height: 14,fill:'white'}}/> <p>mishalalias08@gmail.com</p>
                        {/* add mail icon */}
                    </div>
                    <div className="contact-detail">
                        <PhoneImg style={{width: 14, height: 14,fill:'white'}}/> <p>+91 7736307440</p>
                        {/* add call icon  */}
                    </div>
                    <div className="contact-detail">
                        <LinkedIn style={{width: 14, height: 14,fill:'white'}}/><a href="https://www.linkedin.com/in/mishal-joe-3903b0273" target="_blank" rel="noopener noreferrer"><p>Mishal Joe</p></a>
                        {/* add linkedin icon  */}
                    </div>
                    {/* <div className="contact-detail">
                        <img src={loca} alt="" />
                    </div> */}
                </div>
            </div>
        
        <form onSubmit={onSubmit} className='contact-right'>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="text" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea  placeholder='Enter your message' name='message' rows="8"/>
            <button type="submit" className='contact-submit'>Submit Now</button>
        </form>   
     </div>
    </div>
  )
}

export default Contact