import React, { useEffect, useState } from 'react';
import './projectcard.css';
import arrow from '../assets/arrow-right-up-line.png';
import { HOST_URL } from '../Constants.js';

const Projectcard = () => {
  const [projects, setProjects] = useState([])

  const getProjects = async () => {
    try {
      const response = await fetch(`${HOST_URL}/projects/getAllProjects`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await response.json()
      setProjects(data.projects)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProjects()
  }, [])
  return (
    <>
      {projects.map((project) => (
        <div className='projectcard-container' key={project._id}>
          <div className='projectcard-image'>
            <img src={project.image} alt={project.projectname} />
          </div>
          <div className='project-title'>
            {project.projectname}
          </div>
          <div className='project-btns'>
            <div className='github-btn arrow-icon'>
              <a href={project.githublink} target='_blank' rel='noopener noreferrer'>
                Github
              </a>
              <img src={arrow} alt='arrow icon'/>
            </div>
            <div className='liveLink_btn arrow-icon'>
              <a href={project.projectlink} target='_blank' rel='noopener noreferrer'>
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
