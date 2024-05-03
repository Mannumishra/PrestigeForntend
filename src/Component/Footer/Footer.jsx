import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <section className='footersection'>
        <div style={{ position: "absolute", right: 10, bottom: 100, cursor: "pointer" ,position:"fixed",zIndex:999 }}>
          <img src="./image/whatsapp-fill.png" alt="" style={{ height: 50 }} />
        </div>
        <div style={{ position: "absolute", right: 10, bottom: 150, cursor: "pointer" ,position:"fixed",zIndex:999 }}>
          <img src="./image/file-pdf-2-fill.png" alt="" style={{ height: 50 }} />
        </div>
        <div className='footermaindiv'>
          <div>
            <div><i class="ri-mail-line fssize"></i><span className='spantext'>SIGN UP TO NEWSLETTER</span></div>
          </div>
          <div>
            <input type="text" name="" id="" placeholder='Your Email Adderss' className='inputtext' /><button className='button'>Subcribe</button>
          </div>
          <div>
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
                <p>Home</p>
                <p>Product</p>
                <p>Contact us </p>
              </div>
              <div>
                <p>About us </p>
                <p>Infrastructure</p>
                <p>Site Map</p>
              </div>
            </div>
            <p className='footerheading'>Product</p>
            <div className='childseccond'>

              <div>
                <p>Head light holder</p>
                <p>Wiring Assemblies</p>
              </div>
              <div>
                <p>Tail Light Holder</p>
                <p>Custom Wriing </p>
                <p>Harness</p>
              </div>
            </div>
          </div>
          <div>
            <img src="./image/2.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer