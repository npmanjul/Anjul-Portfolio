import React from 'react';
import './navbar.css'
import { NavLink } from 'react-router-dom';
import homeIcon from '../assets/home-line.png'
import aboutIcon from '../assets/account-circle-fill.png'
import skillIcon from '../assets/tools-fill.png'
import contactIcon from '../assets/smartphone-fill.png';

const Navbar = () => {
    return (
        <>
            <div className='nav-container'>
                <div className='nav-box'>
                    <div className='btns'>
                        <NavLink to='/' className='link'>
                            <div>
                                <div className="btn-icon">
                                    <img src={homeIcon} />
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className='btns'>
                        <NavLink to='/aboutus' className='link'>
                            <div className="btn-icon">
                                <img src={aboutIcon} />
                            </div>
                        </NavLink>
                    </div>
                    <div className='btns'>
                        <NavLink to='/skill' className='link'>
                            <div className="btn-icon">
                                <img src={skillIcon} />
                            </div>
                        </NavLink>
                    </div>
                    <div className='btns'>
                        <NavLink to='/contact' className='link'>
                            <div className="btn-icon">
                                <img src={contactIcon} />
                            </div>
                        </NavLink>
                    </div>
                    <div className='btns'>
                        <NavLink to='/project' className='link'>
                            <div className="btn-icon">
                                <img src={contactIcon} />
                            </div>
                        </NavLink>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar