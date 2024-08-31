import React from 'react';
import './aboutprofile.css';
import profileImg from '../assets/anjulimg.png'

const Aboutprofile = () => {
  return (
    <>
      <div className='aboutusprofile-container'>
        <div className='aboutusprofile-image'><img src={profileImg} /></div>
        <div className='aboutusprofile-description'>Anjul Singh is a B.Tech student in Information Technology at Madan Mohan Malaviya University of Technology, with a CGPA of 7.5. He has a strong command of programming languages like C, C++, and Java, alongside expertise in data structures, algorithms, and web development using React.js, Node.js, and databases like MongoDB. During his internships, Anjul built websites from scratch for MMMUT Foundation and Pushpak Drone Viman Pvt Ltd, significantly enhancing their digital presence and user experience. His projects include a Google Gemini Clone with AI capabilities, an Online Compiler for real-time coding, and a responsive Weather App. Anjul's work is showcased on GitHub, LeetCode, and CodeChef, where he continues to develop innovative solutions.

        </div>
      </div>
    </>
  )
}

export default Aboutprofile