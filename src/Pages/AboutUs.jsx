import React from 'react'
import './aboutus.css'
import Timeline from '../component/Timeline';
import Aboutprofile from '../component/Aboutprofile'
import Services from '../component/Services';

const AboutUs = () => {
  return (
    <>
      <div>
        <div className='aboutus-profile-container'>
          <div className='aboutus-heading'>About Me</div>
          <Aboutprofile />
        </div>
        <div>
          <div className='aboutus-heading'>Work Experience</div>
          <div className='workexperience-container'><Timeline /></div>
        </div>
        <div>
          <div className='aboutus-heading'>Services</div>
          <div className='services-container'>
          <Services/>
          </div>
        </div>

      </div>
    </>
  )
}

export default AboutUs