import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
    const [data, setData] = useState([])
    const [subcategory, setsubcategory] = useState([])
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };
    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };
    // const handleDropdownToggle = () => {
    //     setIsDropdownOpen(!isDropdownOpen);
    // };
    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeNavbarOnMobile = () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (window.innerWidth < 992) { // assuming 992px is the breakpoint for mobile
            navbarToggler.click(); // simulate click on navbar-toggler button to close the navbar
        }
    };


    const getApiCategoryData = async () => {
        let res = await axios.get("https://api.prestigeindustries.co.in/api/category")
        // console.log(res);
        console.log(res)
        setData(res.data.data)
    }

    useEffect(() => {
        getApiCategoryData()
    }, [])
    return (
        <>
            <div className='navbardivfirst fixed-top'>
                <div>
                    <p className='navbartopheanding'>Address: Bawana Delhi, GST No. 07AJZPK8722F1ZO</p>
                </div>
                <div className='icon-container'>
                    <div className='icon-containerdiv'><i className="ri-mail-line fssizeee"></i></div><span className='navbaespantext'>Send mail</span>
                    <div className='icon-containerdiv'> <i className="ri-message-2-line fssizeee"></i></div><span className='navbaespantext'>Send sms</span>
                </div>
                <div>
                    <img src="../image/isologo2.png" alt="" className='isoimgae' />
                    <Link to="https://www.facebook.com/prestigeindustriesofficial" style={{ textDecoration: "none" }}><i className="ri-facebook-box-fill fssize" style={{ color: "#1877F2" }}></i></Link>
                    <Link to="https://www.linkedin.com/company/prestige-industries" style={{ textDecoration: "none" }}><i class="ri-linkedin-box-fill fssize" style={{ color: "#0077b5" }}></i></Link>
                    <Link to="https://instagram.com/prestigeindustries_official?igshid=10tr8y2m3eigk" style={{ textDecoration: "none" }}><i className="ri-instagram-line fssize" style={{ color: "#ff5a5f" }}></i></Link>
                   
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mainnavbar" style={{}}>
                <div>
                    <Link to="/"> <img src="https://catalog.wlimg.com/1/2990960/other-images/12569-comp-image.png" alt="" className='navbarimage' /></Link>
                </div>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navbaralllink" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" onClick={closeNavbarOnMobile}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" onClick={closeNavbarOnMobile}>About Us</Link>
                            </li>
                            <li className="nav-item dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" aria-expanded={isDropdownOpen} >
                                    Products
                                </a>
                                <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdownMenuLink">
                                    {
                                        data.map((item, index) =>
                                            <ul className="parent-list">
                                                <li><Link className="dropdown-item" to={`categoryproductdetails/${item._id}`} onClick={closeNavbarOnMobile}>{item.categoryname}</Link>
                                                </li>
                                            </ul>
                                        )
                                    }

                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/infra" onClick={closeNavbarOnMobile}>Infrastructure</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact" onClick={closeNavbarOnMobile}>Contact us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/career" onClick={closeNavbarOnMobile}>Career</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='call' style={{ display: "flex", gap: 10 }}>
                    <i className="ri-customer-service-line fssizee"></i><p className='navbartopheanding'>9999196748
                        <br /> Call Us
                    </p>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
