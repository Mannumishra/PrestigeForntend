import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <section className='footersection'>
        <div style={{ position: "absolute", right: 10, bottom: 100, cursor: "pointer", position: "fixed", zIndex: 999 }}>
          <img src="./image/whatsapp-fill.png" alt="" style={{ height: 50 }} />
        </div>
        <div style={{ position: "absolute", right: 10, bottom: 150, cursor: "pointer", position: "fixed", zIndex: 999 }}>
          <img src="./image/file-pdf-2-fill.png" alt="" style={{ height: 50 }} />
        </div>
        <div className='footermaindiv'>
          <div>
            <div><i class="ri-mail-line fssize"></i><span className='spantext'>SIGN UP TO NEWSLETTER</span></div>
          </div>
          <div>
            <input type="text" name="" id="" placeholder='Your Email Adderss' className='inputtext' /><button className='button'>Subcribe</button>
          </div>
          <div className=''>
            <i class="ri-facebook-box-fill fssize"></i>
            <i class="ri-twitter-fill fssize"></i>
            <i class="ri-instagram-line fssize"></i>
          </div>
        </div>
        <hr style={{ color: "white", width: "80%", marginLeft: "10%" }} />
        <div className='footersecondmain'>
          <div className='secondchilddiv' >
            <img src="https://2.wlimg.com/product_images/bc-small/dir_100/2990960/wiring-assemblies-1218730.jpg" alt="" className='footerimage' style={{}} />
          </div>
          <div>
            <p className='footerheading'>General Links</p>
            <div className='Childfirst'>
              <div>

                <Link to="/" style={{ color: "white" }} className='textdeco'><p>Home</p></Link>
                <Link to="/contact" style={{ color: "white" }}><p>Contact us</p></Link>
                <p>Site Map</p>
              </div>
              <div>
                <Link to="/about" style={{ color: "white" }}><p>About</p></Link>
                <Link to="/infra" style={{ color: "white" }}><p>Infrastructure</p></Link>
                {/* <p>Site Map</p> */}
              </div>
            </div>
            <p className='footerheading'>Product</p>
            <div className='childseccond'>
              <div>
                <Link style={{ color: "white" }}>  <p>Wiring Harnesh</p></Link>
                <Link style={{ color: "white" }}>  <p>Wiring Assembly</p></Link>
              </div>
              <div>
                <Link style={{ color: "white" }}><p>Automotiv Connector</p></Link>
              </div>
            </div>
          </div>
          <div>
            <img src="../image/2.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer