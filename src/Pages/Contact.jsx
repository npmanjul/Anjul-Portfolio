import React from 'react';
import './contact.css'
import githubIcon from '../assets/github-fill.png';
import linkedInIcon from '../assets/linkedin-box-fill.png';
import instaIcon from '../assets/instagram-line (1).png';
import twitterIcon from '../assets/twitter-x-fill.png';
import mailIcon from '../assets/mail-line (1).png';
import Contactform from '../component/Contactform';

const Contact = () => {
  return (
    <>
      <div className='contact-container'>
      <div className='contactus-heading'>Get in Touch</div>
        <div className='contact-box'>
          <div className=' contact-detail-box'>
            <div className='contact-detail-heading'>
              Contact Detail
            </div>
            <div>
              <div className='detail-heading'>
                <span >Email : </span> 
                <a href="mailto:anjulsingh462@gmail.com">anjulsingh462@gmail.com</a> 
              </div>
              <div className='detail-heading'>
                <span>Phone No. : </span>
                <a href="tel:+917523801921">7523801921</a>
              </div>
            </div>
          </div>
          <div className='contact-detail-box'>
            <div className='contact-detail-heading'>
              Social Media
            </div>
            <div className="contact-socialmedia-box">
                <a href="https://github.com/npmanjul" target="_blank">
                  <div className="socialmedia-icon">
                    <img src={githubIcon} alt="GitHub" />
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/anjul-singh-3500a1219/" target="_blank">
                  <div className="socialmedia-icon">
                    <img src={linkedInIcon} alt="LinkedIn" />
                  </div>
                </a>

                <a href="https://www.instagram.com/anjul__s/" target="_blank">
                  <div className="socialmedia-icon">
                    <img src={instaIcon} alt="Instagram" />
                  </div>
                </a>

                <a href="https://x.com/Anjul__s" target="_blank">
                  <div className="socialmedia-icon">
                    <img src={twitterIcon} alt="Twitter" />
                  </div>
                </a>


                <a href="mailto:anjulsingh462@gmail.com?subject=Hello,%20I%20am%20anjul">
                  <div className="socialmedia-icon">
                    <img src={mailIcon} alt="Mail" />
                  </div>
                </a>

              </div>
        
          </div>
        </div>
        <div className='contact-form'>
          <Contactform/>
        </div>
      </div>
    </>
  )
}

export default Contact