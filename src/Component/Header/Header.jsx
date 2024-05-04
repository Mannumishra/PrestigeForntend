import React, { useState } from 'react';
import './Header.css';
import logo from './logo.jpeg';
import { Link } from 'react-router-dom';

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState({});

    const toggleDropdown = (dropdown) => {
        setDropdownOpen(prevState => ({
            ...prevState,
            [dropdown]: !prevState[dropdown]
        }));
    };

    const [isMobModeActive, setIsMobModeActive] = useState(false);

    const toggleMobMenu = () => {
        setIsMobModeActive(!isMobModeActive);
    }

    const closeMobMenu = () => {
        setIsMobModeActive(false);
    }

    // Example data structure with categories and subcategories
    const categories = [
        {
            name: 'Doors',
            subcategories: ['Solid Wood Panel Doors', 'Flush Doors']
        },
        {
            name: 'Modular Kitchen',
            subcategories: ['L-Shape', 'U-Shape', 'Parallel']
        },
        {
            name: 'Decorative Surfaces',
            subcategories: ['L-Shape', 'U-Shape', 'Parallel']
        },
        // Add more categories as needed
    ];

    return (
        <>
            <header>
                <div className="header-middle container">
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-whatsapp"></i></a>
                    </div>
                    <div className="logo">
                        <Link to="/"><img src={logo} alt="logo" /></Link>
                    </div>
                    <a href="tel:+918048779557" className="contact-btn">
                        <i className="fa-solid fa-headset"></i>
                        <p>08048779557 <br /> Call Us</p>
                    </a>
                    <div className="hamburger" onClick={toggleMobMenu}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
                <nav>
                    <ul>
                        {categories.map((category, index) => (
                            <li
                                key={index}
                                className="main-dropdown"
                                onMouseEnter={() => toggleDropdown(category.name)}
                                onMouseLeave={() => toggleDropdown(category.name)}
                            >
                                <div className='dropName'>{category.name}</div>
                                {dropdownOpen[category.name] && (
                                    <div className="dropdown-content">
                                        <ul>
                                            {category.subcategories.map((subcategory, subIndex) => (
                                                <li key={subIndex}><Link to="/product-page">{subcategory}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>


            <div className="side-nav">
                <div className={`mob-nav ${isMobModeActive ? 'mob-active' : ''}`}>
                    <div className="menu-close" onClick={closeMobMenu}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <ul className="list-unstyled">
                        <li><Link to="/" onClick={closeMobMenu}>Home</Link></li>
                        <li><Link to="/about-us" onClick={closeMobMenu}>About Us</Link></li>
                        {/* Add more links for mobile menu */}
                        {/* Example dropdown for mobile */}
                        <li className="main-dropdown">
                            <span className="dropName" onClick={() => toggleDropdown('MobileDropdown1')}>Dropdown 1</span>
                            {dropdownOpen['MobileDropdown1'] && (
                                <div className="dropdown-content">
                                    <ul>
                                        <li><Link to="/category-1" onClick={closeMobMenu}>Category 1</Link></li>
                                        <li><Link to="/category-2" onClick={closeMobMenu}>Category 2</Link></li>
                                        {/* Add more dropdown items as needed */}
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li className="main-dropdown">
                            <span className="dropName" onClick={() => toggleDropdown('MobileDropdown2')}>Dropdown 2</span>
                            {dropdownOpen['MobileDropdown2'] && (
                                <div className="dropdown-content">
                                    <ul>
                                        <li><Link to="/category-3" onClick={closeMobMenu}>Category 3</Link></li>
                                        <li><Link to="/category-4" onClick={closeMobMenu}>Category 4</Link></li>
                                        {/* Add more dropdown items as needed */}
                                    </ul>
                                </div>
                            )}
                        </li>
                    </ul>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="https://api.whatsapp.com/send?phone=919953091185" target="_blank"><i className="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
            {/* WhatsApp floating button */}
            <a href="https://api.whatsapp.com/send?phone=919953091185" target="_blank" className="whatsapp_float"><i className="fab fa-whatsapp whatsapp-icon"></i></a>
        </>
    );
}

export default Header;
