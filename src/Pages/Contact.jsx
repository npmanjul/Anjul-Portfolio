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
                <span >Email :</span> anjulsingh462@gmail.com
              </div>
              <div className='detail-heading'>
                <span>Phone No. :</span> 7523801921
              </div>
            </div>
          </div>
          <div className='contact-detail-box'>
            <div className='contact-detail-heading'>
              Social Media
            </div>
            <div className='contact-socialmedia-box'>
                <div className='socialmedia-icon'><img src={githubIcon} alt="GitHub" /></div>
                <div className='socialmedia-icon'><img src={linkedInIcon} alt="LinkedIn" /></div>
                <div className='socialmedia-icon'><img src={instaIcon} alt="Instagram" /></div>
                <div className='socialmedia-icon'><img src={twitterIcon} alt="Twitter" /></div>
                <div className='socialmedia-icon'><img src={mailIcon} alt="Mail" /></div>
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