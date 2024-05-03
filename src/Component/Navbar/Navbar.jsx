import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };
    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };
    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <div className='navbardivfirst'>
                <div>
                    <p className='navbartopheanding'>Address: Bawana Delhi, GST No. 987654567</p>
                </div>
                <div>
                    <i className="ri-facebook-box-fill fssize"></i>
                    <i className="ri-twitter-fill fssize"></i>
                    <i className="ri-instagram-line fssize"></i>
                </div>
            </div>
            <div className='navbardivsecond'>
                <div style={{ display: "flex", gap: 10 }}>
                    <i className="ri-customer-service-line fssizee"></i><p className='navbartopheanding'>08048779557
                        <br /> Call Us
                    </p>
                </div>
                <div>
                    <img src="https://catalog.wlimg.com/1/2990960/other-images/12569-comp-image.png" alt="" className='navbarimage' />
                </div>
                <div className='icon-container'>
                    <div className='icon-containerdiv'><i className="ri-mail-line fssizeee"></i></div><span className='navbaespantext'>Send mail</span>
                    <div className='icon-containerdiv'> <i className="ri-message-2-line fssizeee"></i></div><span className='navbaespantext'>Send sms</span>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navbaralllink" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            {/* <li className="nav-item dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" aria-expanded={isDropdownOpen}>
                                    Products
                                </a>
                                <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdownMenuLink">
                                    <ul class="parent-list">
                                        <li><a class="dropdown-item" href="#">Head Light Holder</a>
                                            <ul class="child-list">
                                                <li><a href="#">dfgh</a></li>
                                                <li><a href="#">dfgh</a></li>
                                                <li><a href="#">dfgh</a></li>
                                                <li><a href="#">dfgh</a></li>
                                                <li><a href="#">dfgh</a></li>
                                                <li><a href="#">dfgh</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul class="parent-list">
                                        <li><Link className="dropdown-item" to="#">Tail Light Holder</Link>
                                            <ul class="child-list">
                                                <li><a href="#">first</a></li>
                                                <li><a href="#">dfgh</a></li>
                                                <li><a href="#">dfgh</a></li>
                                                <li><a href="#">dfgh</a></li>
                                                <li><a href="#">dfgh</a></li>
                                                <li><a href="#">dfgh</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul class="parent-list">
                                        <li><Link className="dropdown-item" to="#">wiring Assembly</Link>
                                            <ul class="child-list">
                                                <li><a href="#">first</a></li>
                                                <li><a href="#">dfgh</a></li>
                                                <li><a href="#">dfgh</a></li>
                                                <li><a href="#">dfgh</a></li>
                                                <li><a href="#">dfgh</a></li>
                                                <li><a href="#">dfgh</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul class="parent-list">
                                        <li><Link className="dropdown-item" to="#">Tail Light Holder</Link>
                                            <ul class="child-list">
                                                <li><a href="#">first</a></li>
                                                <li><a href="#">dfgh</a></li>
                                                <li><a href="#">dfgh</a></li>
                                                <li><a href="#">dfgh</a></li>
                                                <li><a href="#">dfgh</a></li>
                                                <li><a href="#">dfgh</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li> */}
                             <li className="nav-item dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleDropdownToggle}>
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" aria-expanded={isDropdownOpen}>
                Products
            </a>
            <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdownMenuLink">
                <ul className="parent-list">
                    <li><Link className="dropdown-item" to="/headlight">Head Light Holder</Link>
                        <ul className="child-list">
                            <li><a href="#">dfgh</a></li>
                            <li><a href="#">dfgh</a></li>
                            <li><a href="#">dfgh</a></li>
                            <li><a href="#">dfgh</a></li>
                            <li><a href="#">dfgh</a></li>
                            <li><a href="#">dfgh</a></li>
                        </ul>
                    </li>
                </ul>
                {/* Other menu items */}
            </div>
        </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/infra">Infrastructure</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
