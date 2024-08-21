import React from 'react';
import './projectcard.css'
import arrow from '../assets/arrow-right-up-line.png'
import gemini from '../assets/project/gemini.png'

const projects=[
  {
    id:1,
    projectName:"Gemini Ai Clone",
    image: gemini,
    githubLink:"https://github.com/npmanjul/Gemini.ai.git",
    liveLink:"https://gemini-ai-nu.vercel.app/" 
  },
  {
    id:2,
    projectName:"Online Web Compiler",
    image: gemini,
    githubLink:"https://github.com/npmanjul/Gemini.ai.git",
    liveLink:"https://gemini-ai-nu.vercel.app/" 
  },
  {
    id:2,
    projectName:"Online Web Compiler",
    image: gemini,
    githubLink:"https://github.com/npmanjul/Gemini.ai.git",
    liveLink:"https://gemini-ai-nu.vercel.app/" 
  },
  {
    id:2,
    projectName:"Online Web Compiler",
    image: gemini,
    githubLink:"https://github.com/npmanjul/Gemini.ai.git",
    liveLink:"https://gemini-ai-nu.vercel.app/" 
  },
  {
    id:2,
    projectName:"Online Web Compiler",
    image: gemini,
    githubLink:"https://github.com/npmanjul/Gemini.ai.git",
    liveLink:"https://gemini-ai-nu.vercel.app/" 
  },
  {
    id:2,
    projectName:"Online Web Compiler",
    image: gemini,
    githubLink:"https://github.com/npmanjul/Gemini.ai.git",
    liveLink:"https://gemini-ai-nu.vercel.app/" 
  },
  {
    id:2,
    projectName:"Online Web Compiler",
    image: gemini,
    githubLink:"https://github.com/npmanjul/Gemini.ai.git",
    liveLink:"https://gemini-ai-nu.vercel.app/" 
  },
  {
    id:2,
    projectName:"Online Web Compiler",
    image: gemini,
    githubLink:"https://github.com/npmanjul/Gemini.ai.git",
    liveLink:"https://gemini-ai-nu.vercel.app/" 
  },
  {
    id:2,
    projectName:"Online Web Compiler",
    image: gemini,
    githubLink:"https://github.com/npmanjul/Gemini.ai.git",
    liveLink:"https://gemini-ai-nu.vercel.app/" 
  },
  {
    id:2,
    projectName:"Online Web Compiler",
    image: gemini,
    githubLink:"https://github.com/npmanjul/Gemini.ai.git",
    liveLink:"https://gemini-ai-nu.vercel.app/" 
  },
  {
    id:2,
    projectName:"Online Web Compiler",
    image: gemini,
    githubLink:"https://github.com/npmanjul/Gemini.ai.git",
    liveLink:"https://gemini-ai-nu.vercel.app/" 
  },

];


const Projectcard = () => {
  return (
    <>
    {projects.map((project)=>(
      <div className='projectcard-container'>
        <div className='projectcard-image'>
          <img src={project.image}/>
        </div>
        <div className='project-title'>
          {project.projectName}
        </div>
        <div className='project-btns'>
          <div className='github-btn arrow-icon'>
            <a href={project.githubLink} target='_blank'>Github</a>
            <img src={arrow}/>
          </div>
          <div className='liveLink_btn arrow-icon'>
          <div></div>
          <a href={project.liveLink} target='_blank'>Live Website</a>
            <img src={arrow}/>
          </div>
        </div>
      </div>
    ))}
      
    </>
  )
}

export default Projectcard