import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from './component/Navbar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs.jsx';
import Contact from './Pages/Contact.jsx';
import Skill from './Pages/Skill.jsx';
import Project from './Pages/Project.jsx';
import './App.css';

const App = () => {
  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

  return (
    <>
      <div className='main-wrapper'>
        <div className='wrapper'>
          <Router>
            <ScrollToTop />
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/skill" element={<Skill />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/project" element={<Project />} />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
