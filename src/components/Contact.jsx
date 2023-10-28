import React, { useRef } from "react";
import "../css/contact.css";
import emailjs from '@emailjs/browser';
import gmail from '../assets/gmail.png'
import phone from '../assets/phone.png'
import place from '../assets/placeholder.png'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pyb87si', 'template_fpjzqen', form.current, 'tj2h_dk3DSdnoJI4w')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });e.target.reset()

  };







  return (
    <>
      <div className="myskils">
        <div className="about">
          <h1 className="me">CONTACT ME</h1>
          <h2 className="ee">CONTACT</h2>
        </div>
      </div>
      <div className="contact">
        <form ref={form} onSubmit={sendEmail} className="just">
          <h1>Just Say Hello</h1>
          <span>
            <input
              className=""
              type="text"
              placeholder="Enter Your Name"
              name="user_name"
              id=""
            />
            <input type="text" placeholder="Enter Your Email" name="user_email" id="" />
            {/* <input type="text" placeholder="Enter Your Subject" name="" id="" /> */}
            <textarea
              className="textarea"
              name="message"
              placeholder="Your Message"

              type="text"
              id=""
              cols="10"
              rows="5"
            ></textarea>

            <button name="message" type="submi" value="Send" className="send">SEND MESSAGE</button>
          </span>
        </form>
        <div className="visit">
          <h1>Contact Info</h1>
          <div className="mail">
            <a href="">
              <img src={gmail} alt="" />
            </a>
            <span>
              <p>rupeshchoudhary@1212gmail.com</p>
            </span>
          </div>
          <div className="mail">
            <a href="">
              <img src={phone} alt="" />
            </a>
            <span className="phone">
              <p>91 9009585819</p>
            </span>
          </div>
          <div className="mail">
            <a href="">
              <img src={place} alt="" />
            </a>
            <span>
              <p>Madhay Pradesh , indore</p>
            </span>
          </div>
          <p>Visite my social profile and get connected</p>

          <div className="profile">
            <div className="github">
            <span>
                {" "}
                <a href="https://www.linkedin.com/in/rupeshchoudhary10/"> <img  src="src\assets\linkedin.png" alt="" /></a>
                
              </span>
            </div>
            <div className="githuba">
              <span>
                {" "}
                <a href=" https://github.com/RupeshChoudhary12
"><img src="src\assets\github.png" alt="" /></a>
                
              </span>
            </div>
            
          </div>
        </div>
      </div>
      <footer className="footer">
        <h1>2023 desgin by Rupesh Choudhary</h1>
      </footer>
    </>
  );
};

export default Contact;
