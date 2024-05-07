import React, { useEffect, useState } from 'react'
import "./Infra.css"
import { Link } from 'react-router-dom'
// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import axios from 'axios';
const Infrasctrure = () => {
    const [data, setData] = useState([])
    const getApiData = async () => {
        try {
            let res = await axios.get("https://api.prestigeindustries.co.in/api/category")
            setData(res.data.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
    useEffect(() => {
        getApiData()
    }, [])
    return (
        <>
            <div style={{ marginTop: 160 }}></div>
            <section>
                <div className="mainaboutdiv">
                    <div className="childabout1">
                        <p className='mainheading'>Infrastructure</p>
                        <div className='divabloutredirect'><Link style={{ textDecoration: "none", color: "#333" }}>Home</Link> > Infrastructure</div>
                        <div>
                            <div className='Infrastructurepage'>
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
                    </div>

                    <div className="childabout2">
                        <div>
                            <ul class="list-group">
                                <li class="list-group-item headingtextside">Products</li>
                                {
                                    data.map((item, index) =>
                                        <li class="list-group-item aboutsidetext"><Link to={`/categoryproductdetails/${item._id}`} style={{ textDecoration: "none", color: "black" }}>{item.categoryname}</Link></li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className='mt-2'>
                            <ul class="list-group">
                                <li class="list-group-item headingtextside">Contact</li>
                                <li class="list-group-item aboutsidetext">Mobile : +91-9999196748</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <div style={{ padding: "50px" }}>
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={6}
                        navigation
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
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
                       
                    </Swiper>
                </div> */}
            </section>
        </>
    )
}

export default Infrasctrure