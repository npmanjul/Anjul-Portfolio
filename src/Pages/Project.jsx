import React from 'react'
import './project.css'
import Projectcard from '../component/Projectcard'

const Project = () => {
  return (
    <>
      <div className='project-conatiner'>
      <div className='project-heading'>Projects</div>
        <div className='project-box'>
          <Projectcard />
        </div>
      </div>
    </>
  )
}

export default Project