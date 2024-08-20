import React from 'react';
import './Skill.css'
import Tech from '../component/Tech';

const Skill = () => {
  return (
    <>
      <div className='skill-container'>
        <div className='skill-heading'>Skills & Abilities</div>
        <div className='techstack-container'>
          <Tech/>
        </div>
      </div>
    </>
  )
}

export default Skill