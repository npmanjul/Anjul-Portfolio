import React from 'react';
import './aboutprofile.css';
import profileImg from '../assets/anjulimg.png'

const Aboutprofile = () => {
  return (
    <>
      <div className='aboutusprofile-container'>
        <div className='aboutusprofile-image'><img src={profileImg} /></div>
        <div className='aboutusprofile-description'>
          Anjul Singh 3rd Year B.Tech Student, Information Technology
          Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur, U.P.
          <br />
          <br />
          I am a dedicated and skilled Information Technology student with a strong command of programming languages such as C, C++, Java, and JavaScript. I specialize in data structures, algorithms, and full-stack web development using the MERN stack. Additionally, I am advancing my expertise in Android development with React Native.
          <br />
          <br />

          I have contributed my technical skills to organizations such as MMMUT Reso, Pushpak Drone Viman, and MMMUT Foundation, where I played a key role in building projects from the ground up. My work has focused on developing impactful solutions and enhancing organizational capabilities through innovative technologies.
        </div>
      </div>
    </>
  )
}

export default Aboutprofile