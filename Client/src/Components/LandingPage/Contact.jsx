import React, {useState} from 'react';
import "./Styles/Contact.css";
import {FaLocationDot} from "react-icons/fa6";
import {GrMail} from 'react-icons/gr';
import {MdWifiCalling3} from "react-icons/md";


export const Contact = () => {
  const [formData, setFormData] = useState ({
    name: "", 
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData, 
      [name]: value,
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      message: '',
      subject: ''
    })
  }
  return (
    <div className='contact-container'>
        <div className="contact-row" id="contact-row-col">
          <div className="contact-column" id="address" >
              <span className='contact-subhead'><FaLocationDot style={{marginRight:"0.5em"}}/> Our Address</span>
              <span className="contact-value">Chandigarh University, NH-95, Ludhiana, Punjab</span>
          </div>
          <div className="contact-column">
            <span className='contact-subhead'><GrMail style={{marginRight:"0.5em"}}/> Mail Us</span>
            <span className="contact-value">alexadev@cumail.in</span>

          </div>
          <div className="contact-column">
            <span className='contact-subhead'><MdWifiCalling3 style={{marginRight:"0.5em"}}/> Call Us</span>
            <span className="contact-value"> {"+91 - "} 9411685425</span>

          </div>
        </div>
        <div className="contact-row" id="contact-form" style={{borderRadius:"10px"}}>
          {/* <div className="contact-map">

          </div> */}
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className='contact-form' method="get">
              <span>
                <input type="text" className='contact-input' id="name" name='name' onChange={handleChange} placeholder='Your Name' />
                <input type="email" className='contact-input' id="email" name='email' onChange={handleChange} placeholder='Your Email'  />
              </span>
                <input type="text" className='contact-input' name="subject" id="subject" onChange={handleChange} placeholder='Subject' />
                <textarea type="text" className='contact-input' name="message" id="message" rows={4} onChange={handleChange} placeholder='Message' />

              <button type="submit" className='contact-button'>Send</button>
            </form>
          </div>
        </div>
    </div>
  )
}
