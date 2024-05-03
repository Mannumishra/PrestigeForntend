import React from 'react'
import './style.css'
const Home = () => {
  return (
    <>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://catalog.wlimg.com/1/2990960/other-images/378606.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://catalog.wlimg.com/1/2990960/other-images/378605.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://catalog.wlimg.com/1/2990960/other-images/378607.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <div className=""> */}
      <div className="WELCOMEsection">
        <p className='heading'> WELCOME TO OUR WEBSITE</p>
        <p className='paragraph'>We <strong>Prestige Industries</strong> An ISO 9001:2015 certified company. we are manufacturer of wiring harness for OEMs.We are capable to manufacture any type of automotive wiring harness Which includes : <br />
          Body wiring harness ( Power Window Wiring harness, Door Lock harness, Dashboard harness, Interior Electrical Components harness and Others ) Chassis wiring harness  (Front Wiring Harness ,Rear wiring Harness, Main wiring Harness and others) Engine Wiring harness  (Cruise Control Systems harness,  Anti-Lock Braking Systems Wiring harness, Speed Sensor wiring harness, Fuel Injection Systems wiring harness,  Others) , Horn wiring harness, stereo wiring harness, Sensors wiring harness. <br />
          And competent to make any other wiring harness available as per the given drawings and specifications: Moreover we cater to the demand for bulk orders too with swiftness and faultlessness'. </p>
      </div>
      <section>
        <div className='sectionforbusiness'>
          <div className='sectionchilddiv'>
            <img src="./image/handshake.png" alt="" className='imageheight' />
            <p className='sectionbuspara'>Nature of Business</p>
            <p className='secondpara'>Manufacturer & Supplier</p>
          </div>
          <div className='sectionchilddiv'>
            <img src="./image/group.png" alt="" className='imageheight' />
            <p className='sectionbuspara'>Number of Employees</p>
            <p className='secondpara'>Below 20</p>
          </div>
          <div className='sectionchilddiv'>
            <img src="./image/company.png" alt="" className='imageheight' />
            <p className='sectionbuspara'>Year of Establishment</p>
            <p className='secondpara'>1995</p>
          </div>
        </div>
        <div className='sectionforbusiness2'>
          <div className='sectionchilddiv'>
            <img src="./image/market.png" alt="" className='imageheight' />
            <p className='sectionbuspara'>Market Covered</p>
            <p className='secondpara'>India</p>
          </div>
          <div className='sectionchilddiv'>
            <img src="./image/ceo.png" alt="" className='imageheight' />
            <p className='sectionbuspara'>Name of CEO</p>
            <p className='secondpara'>Mr. Shyam Sunder Kalra</p>
          </div>
          <div className='sectionchilddiv'>
            <img src="./image/money-bag.png" alt="" className='imageheight' />
            <p className='sectionbuspara'>GST No</p>
            <p className='secondpara'>07AJZPK8722F1ZO</p>
          </div>
        </div>
      </section>

      <section className='sectionrange'>
        <div>
          <p className='productheading'>Product <span style={{ color: "#00abed" }}>Renge</span> </p>
        </div>
        <div className="ProductRenageMain">
          <div className='ProductRenagechild'>
            <div className='imagerange'>
              <div className="img-parent">
                <img src="https://2.wlimg.com/product_images/bc-small/dir_100/2990960/custom-wiring-harness-1218733.jpg" alt="" />
              </div>
            </div>
            <div className='secondchild'>
              <p className='productrangeheading'>Head Light Holders</p>
              <p className='productrangepara'>We are offering wide assortment of head light holders, which are available in...</p>
            </div>
          </div>
          <div className="ProductRenagechild">
            <div className='imagerange'>
              <div className="img-parent">
                <img src="https://2.wlimg.com/product_images/bc-small/dir_100/2990960/wiring-assemblies-1218730.jpg" alt="" />
              </div>
            </div>
            <div className='secondchild'>
              <p className='productrangeheading'>Tail Light holder</p>
              <p className='productrangepara'>We are presenting different assortments of Tail Light Holder in different lengths and...</p>
            </div>
          </div>
          <div className="ProductRenagechild">
            <div className='imagerange'>
              <div className="img-parent">
                <img src="https://2.wlimg.com/product_images/bc-small/dir_100/2990960/tail-light-holder-1218728.jpg" alt="" />
              </div>
            </div>
            <div className='secondchild'>
              <p className='productrangeheading'>Wiring Assemblies</p>
              <p className='productrangepara'>We are counted amongst the leading Manufacturers and Suppliers of Wiring Assemblies in India. We...</p>
            </div>
          </div>
          <div className="ProductRenagechild">
            <div className='imagerange'>
              <div className="img-parent">
                <img src="https://2.wlimg.com/product_images/bc-small/dir_100/2990960/head-light-holders-1218724.jpg" alt="" />
              </div>
            </div>
            <div className='secondchild'>
              <p className='productrangeheading'>custom wiring harness</p>
              <p className='productrangepara'>If you are looking for Custom Wiring Harness, then you can contact us. Our company has carved a...</p>
            </div>
          </div>
        </div>
      </section>
      {/* </div> */}
      <section>
        <div>
          <p className='productheading'>Infrastructure</p>
          <div className='Infrastructuremain'>
            <div className='Infrastructurechild'>
              <img src="https://dyimg77.exportersindia.com/catalog-gallery/gallery_18569_20201123134106.jpeg" alt="" className='insfrastuctureimage' />
            </div>
            <div className='Infrastructurechild'>
              <img src="https://dyimg77.exportersindia.com/catalog-gallery/gallery_18570_20201123134120.jpeg" alt="" className='insfrastuctureimage' />
            </div>
            <div className='Infrastructurechild'>
              <img src="https://dyimg77.exportersindia.com/catalog-gallery/gallery_18571_20201123134125.jpeg" alt="" className='insfrastuctureimage' />
            </div>
            <div className='Infrastructurechild'>
              <img src="https://dyimg77.exportersindia.com/catalog-gallery/gallery_18572_20201123134130.jpeg" alt="" className='insfrastuctureimage' />
            </div>
          </div>
        </div>
      </section>

      <section className='unitmainsection'>
        <div className='Unitmain'>
          <div className='Unitchild'>
            <div className='imgaediv'>
              <img src="./image/assembly-line.png" alt="" className='unitimage' />
            </div>
            <div>
              <p className='unitheading'>Manufacturing Unit</p>
              <p>We are backed by a well-equipped manufacturing unit that sprawls over an area of 100 square meters, thereby, covering as big a space as 4,000 square feet. All the Latest Technologies and Machineries such as crimping machines, pvc welding machines, power presses, pneumatic tools, hand presses, etc. are installed in our manufacturing unit.</p>
            </div>
          </div>
          <div className='Unitchild'>
            <div className='imgaediv'>
              <img src="./image/shuttle.png" alt="" className='unitimage' />
            </div>
            <div>
              <p className='unitheading'>Our USP's</p>
              <p>We strive for quality and timely conclusion of the orders.
                The leaders of the company are supported by a vast experience in the automobile sector, which is helping the company to reach new heights and break its own records year after year.
                Our manufacturing techniques are well researched and advanced.</p>
            </div>
          </div>
          <div className='Unitchild'>
            <div className='imgaediv'>
              <img src="./image/automated.png" alt="" className='unitimage' />
            </div>
            <div>
              <p className='unitheading'>Customized Solutions</p>
              <p>We bring afore customized solutions for our valuable clients, so as to appease the variegated demands. We are competent to make the Auto Electrical Parts available as per the given drawings and specifications. Moreover, we cater to the demand for bulk orders too with swiftness and faultlessness.</p>
            </div>
          </div>
        </div>

      </section>
      <section className='formsection'>
        <div className='formmaindiv'>
          <div className='formdivchild'>
            <h2>HOW TO FIND US</h2>
            <div><i className="ri-user-fill size"></i><span className='spantext'>Mr. Mohit Kalra </span></div>
            <div><i className="ri-map-pin-line size"></i><span className='spantext'>O-173, Sector-3, DSIIDC Industrial Park, Bawana, Bawana, Delhi, India</span></div>
            <div><i className="ri-phone-line size"></i><span className='spantext'>08048779557</span></div>
            <div><i className="ri-mail-line size"></i><span className='spantext'>prestige.industries@rediffmail.com </span></div>
          </div>
          <div>
            <h5>QUICK <span style={{ color: "#00abed" }}>ENQUIRY</span></h5>
            <form className="row g-3">
              <div className="col-md-6">
                <input type="text" className="form-control" id="inputEmail4" placeholder='Product/Service Looking for' />
              </div>
              <div className="col-md-3">
                <input type="text" className="form-control" id="inputtext4" placeholder='Estimate Quantity' />
              </div>
              <div className="col-md-3">
                <input type="text" className="form-control" id="inputtext4" placeholder='unit type ' />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" id="inputEmail4" placeholder='Your name' />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" id="inputtext4" placeholder='your email' />
              </div>
              <div className="col-md-6">
                <select id="inputState" className="form-select">
                  <option selected>India </option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" id="inputZip" placeholder='Phone number' />
              </div>
              <div className="col-md-12">
                <textarea name="" id="" cols="30" rows="3" className='form-control' placeholder='leave a message '></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home