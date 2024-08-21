import React from 'react'
import Nav from './component/Navbar.jsx'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs.jsx';
import Contact from './Pages/Contact.jsx';
import Skill from './Pages/Skill.jsx';
import Project from './Pages/Project.jsx';
import './App.css'

const App = () => {
  return (
    <>
      <div className='main-wrapper'>
        <div className='wrapper'>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/skill" element={<Skill />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/project" element={<Project />} />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
              <Nav />
          </Router>
        </div>
      </div>
    </>
  )
}

export default App