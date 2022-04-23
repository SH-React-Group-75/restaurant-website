import React from 'react';
import email from '../assets/email.png';
import mobile from '../assets/mobile.png';
import '../CSS/contact.scss';

const Contact = () => {
  return (
    <>
      <div className="container">
        <h2 className="head-text">Take a coffee & chat with Us</h2>

        <div className="app__footer-cards">
          <div className="app__footer-card ">
            <img src={email} alt="email" />
            <a href="mailto:hello@micael.com" className="p-text">
              Cap75eatery@gmail.com
            </a>
          </div>
          <div className="app__footer-card">
            <img src={mobile} alt="phone" />
            <a href="tel:+2348135512892" className="p-text">
              (+234)8145555555
            </a>
          </div>
        </div>

        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
            />
          </div>
          <button type="button" className="p-text">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
