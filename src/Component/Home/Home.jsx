import React, { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Home = () => {
  const [cateprod, setCateprod] = useState([])

  const getApiData = async () => {
    try {
      let res = await axios.get("https://api.prestigeindustries.co.in/api/category")
      setCateprod(res.data.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])
  useEffect(() => {
    getApiData()
  }, [])
  return (
    <>
      <div style={{ marginTop: 160 }}></div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="../image/automotive connectors.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="../image/Wiring harness.jpg" className="d-block w-100" alt="..." />
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
        <p className='paragraph'>We <strong>Prestige Industries</strong> An ISO 9001:2015 certified company. we are manufacturer of wiring harness for OEMs.We are capable to manufacture any type of automotive wiring harness Which includes : </p>
         <p className='paragraphh'> Body wiring harness ( Power Window Wiring harness, Door Lock harness, Dashboard harness, Interior Electrical Components harness and Others ) Chassis wiring harness  (Front Wiring Harness ,Rear wiring Harness, Main wiring Harness and others) Engine Wiring harness  (Cruise Control Systems harness,  Anti-Lock Braking Systems Wiring harness, Speed Sensor wiring harness, Fuel Injection Systems wiring harness,  Others) , Horn wiring harness, stereo wiring harness, Sensors wiring harness. <br />
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
          <div className='sectionchilddiv1'>
            <img src="./image/market.png" alt="" className='imageheight' />
            <p className='sectionbuspara'>Market Covered</p>
            <p className='secondpara'>India</p>
          </div>
          <div className='sectionchilddiv1'>
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
          <p className='productheading'>Product <span style={{ color: "#00abed" }}>Category</span> </p>
        </div>
        <div className="ProductRenageMain">
          {
            cateprod.map((item, index) =>

              <div className='ProductRenagechild'>
                <div className='imagerange'>
                  <div className="img-parent">
                    <Link to={`/categoryproductdetails/${item._id}`}> <img src={item.image} alt="" style={{ height: 230, width: "100%" }} /></Link>
                  </div>
                </div>
                <div className='secondchild'>
                  <p className='productrangeheading'>{item.categoryname}</p>
                  {/* <p className='productrangepara'>{item.description}</p> */}
                </div>
              </div>

            )
          }

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
            <div><i className="ri-phone-line size"></i><span className='spantext'>9999196748</span></div>
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
                <input type="text" className="form-control" id="inputZip" placeholder='Phone number' />
              </div>
              <div className="col-md-12">
                <input type="text" className="form-control" id="inputZip" placeholder='Enter Full Address' />
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
      <section>
        <div style={{ padding: "50px" }}>
          <Swiper
            // install Swiper modules
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={6}
            navigation
            // pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              992: {
                slidesPerView: 5,
              },
            }}
          >
            <SwiperSlide>
              <div style={{ position: "relative" }}>
                <img src="../image/vseg2.jpg" alt="" className='insfrastuctureimages' />
                <div className='swiperdiv'><p className='textswiper'>3 WHEELERS</p></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ position: "relative" }}>
                <img src="../image/vseg3.jpg" alt="" className='insfrastuctureimages' />
                <div className='swiperdiv'><p className='textswiper'>PASSENGER VEHICLES</p></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ position: "relative" }}>
                <img src="../image/vseg4.jpg" alt="" className='insfrastuctureimages' />
                <div className='swiperdiv'><p className='textswiper'>INDUSTRIAL & RAILWAYS</p></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ position: "relative" }}>
                <img src="../image/vseg5.jpg" alt="" className='insfrastuctureimages' />
                <div className='swiperdiv'><p className='textswiper'>ELECTRIC VEHICLES</p></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ position: "relative" }}>
                <img src="../image/vseg6.jpg" alt="" className='insfrastuctureimages' />
                <div className='swiperdiv'><p className='textswiper'>COMMERCIAL VEHICLES</p></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ position: "relative" }}>
                <img src="../image/vseg7.jpg" alt="" className='insfrastuctureimages' />
                <div className='swiperdiv'><p className='textswiper'>OFF ROAD VEHICLES</p></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ position: "relative" }}>
                <img src="../image/vseg8.jpg" alt="" className='insfrastuctureimages' />
                <div className='swiperdiv'><p className='textswiper'>TRACTORS</p></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ position: "relative" }}>
                <img src="../image/vseg1.jpg" alt="" className='insfrastuctureimages' />
                <div className='swiperdiv'><p className='textswiper'>2 WHEELERS</p></div>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
                            <img src="../image/vseg4.jpg" alt="" className='insfrastuctureimages' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../image/vseg5.jpg" alt="" className='insfrastuctureimages' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../image/vseg6.jpg" alt="" className='insfrastuctureimages' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../image/vseg7.jpg" alt="" className='insfrastuctureimages' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../image/vseg8.jpg" alt="" className='insfrastuctureimages' />
                        </SwiperSlide> */}
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default Home