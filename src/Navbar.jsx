import React from 'react'
import { NavLink } from 'react-router-dom';
import web from '../src/images/logo icecreamist.png';

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className='row'>
                <div className="col-mx">

                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <div className="container-fluid">
                                <NavLink
                                    
                                    className="navbar-brand"  
                                    
                                    to="/"> <img src = {web} className="logo-fluid" alt="logo img" />

                                </NavLink>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse nav" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink active className="menu_active" exact className="nav-link active"
                                                aria-current="page"
                                                to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink active className="menu_active" className="nav-link" to="/service">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink active className="menu_active" className="nav-link" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink active className="menu_active" className="nav-link" to="contact">Contact</NavLink>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;