import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <section className='footersection'>
        
        <div style={{ position: "absolute", right: 40, bottom: 85, cursor: "pointer", position: "fixed", zIndex: 999 }}>
        <a href="https://drive.google.com/drive/folders/143X9MYyqBPiUUnve0ZbVxlQGUsXCXuTk" target='_blank'><img src="./image/file-pdf-2-fill.png" alt="" className='pdfcolor' style={{}} /></a>
        </div>
        <div className='footersecondmain'>
          <div>
            <p className='footerheading'>General Links</p>
            <div className='Childfirst'>
              <div>

                <Link to="/" style={{ color: "white" }} className='textdeco'><p>Home</p></Link>
                <Link to="/contact" style={{ color: "white" }}><p>Contact us</p></Link>
                <Link to="/career" style={{ color: "white" }}><p>Careers</p></Link>
                {/* <p>Site Map</p> */}
              </div>
              <div>
                <Link to="/about" style={{ color: "white" }}><p>About</p></Link>
                <Link to="/infra" style={{ color: "white" }}><p>Infrastructure</p></Link>
                
                {/* <p>Site Map</p> */}
              </div>
            </div>

          </div>
          <div>
            <p className='footerheading'>Product</p>
            <div className='childseccond'>
              <div>
                <Link style={{ color: "white" }}>  <p>Wiring Harness</p></Link>
                <Link style={{ color: "white" }}>  <p>Wiring Assembly</p></Link>
                <Link style={{ color: "white" }}><p>Automotive Connector</p></Link>
              </div>
              {/* <div>
              
              </div> */}
            </div>
          </div>
          <div className=''>
            <div>
              <div><i class="ri-mail-line fssize"></i><span className='spantext'>SIGN UP TO NEWSLETTER</span></div>
            </div>
            <div>
              <input type="text" name="" id="" placeholder='Your Email Adderss' className='inputtext' /><button className='button'>Subcribe</button>
            </div>
            <div className='footericon'>
            <Link to="https://www.facebook.com/prestigeindustriesofficial" style={{ textDecoration: "none" }}><i className="ri-facebook-box-fill fssize" style={{ color: "#1877F2" }}></i></Link>
                    <Link to="https://www.linkedin.com/company/prestige-industries" style={{ textDecoration: "none" }}><i class="ri-linkedin-box-fill fssize" style={{ color: "#0077b5"}}></i></Link>
                    <Link to="https://instagram.com/prestigeindustries_official?igshid=10tr8y2m3eigk" style={{ textDecoration: "none" }}><i className="ri-instagram-line fssize" style={{ color: "#ff5a5f" }}></i></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer