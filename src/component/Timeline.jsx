import React from 'react';
import './timeline.css'

const Timeline = () => {
  return (
    <>


      <div class="timeline">
        <div class="container left">
          <div class="content">
            <div className='upper-container'>
              <div className='company-name'>MMMUT Foundation</div>
              <div className='work-duration'>06/24-07/24</div>
            </div>
            <div className='middle-container'>
            Built a user-friendly website for MMMUT Foundation using React.js, CSS, and JavaScript, significantly enhancing their online visibility and supporting their mission.
            </div>
            <div className='lower-container'>
              <div className='timeline-btn'>
                <a href='https://mmmut-foundation-anjul.vercel.app/'  target='_blank'>
                <button>Live Link</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <div className='upper-container'>
              <div className='company-name'>Pushak Drone Viman</div>
              <div className='work-duration'>02/24-05/24</div>
            </div>
            <div className='middle-container'>
            Engineered a company website for Pushpak Drone Viman Pvt Ltd using React.js, CSS, and JavaScript, boosting digital footprint, product visibility, and driving sales growth through a refined online platform.
            </div>
            <div className='lower-container'>
              <div className='timeline-btn'>
              <a href='https://www.pushpakdroneviman.in/' target='_blank'>
                <button>Live Link</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Timeline