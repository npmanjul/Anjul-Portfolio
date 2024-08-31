import React from 'react';
import './projectcard.css';
import arrow from '../assets/arrow-right-up-line.png';
import data from '../assets/Data/Data';

const Projectcard = () => {
  return (
    <>
      {data.map((project) => (
        <div className='projectcard-container' key={project.id}>
          <div className='projectcard-image'>
            <img src={project.image} alt={project.projectName} />
          </div>
          <div className='project-title'>
            {project.projectName}
          </div>
          <div className='project-btns'>
            <div className='github-btn arrow-icon'>
              <a href={project.githubLink} target='_blank' rel='noopener noreferrer'>
                Github
              </a>
              <img src={arrow} alt='arrow icon'/>
            </div>
            <div className='liveLink_btn arrow-icon'>
              <a href={project.liveLink} target='_blank' rel='noopener noreferrer'>
                Live Website
              </a>
              <img src={arrow} alt='arrow icon'/>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Projectcard;
