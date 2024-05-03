import React from 'react'
import "./Infra.css"
import { Link } from 'react-router-dom'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Infrasctrure = () => {
    return (
        <>
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
                                <li class="list-group-item aboutsidetext">Head Light Holder</li>
                                <li class="list-group-item aboutsidetext">Tail Light Holder</li>
                                <li class="list-group-item aboutsidetext">Wiring Assemblies</li>
                                <li class="list-group-item aboutsidetext">custom Wiring Harness</li>
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
                <div style={{ padding: "50px" }}>
                    <Swiper
                        // install Swiper modules
                        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y ]}
                        spaceBetween={50}
                        slidesPerView={4}
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
                                slidesPerView: 2,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <img src="https://dyimg77.exportersindia.com/catalog-gallery/gallery_18569_20201123134106.jpeg" alt="" className='insfrastuctureimage' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://dyimg77.exportersindia.com/catalog-gallery/gallery_18570_20201123134120.jpeg" alt="" className='insfrastuctureimage' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://dyimg77.exportersindia.com/catalog-gallery/gallery_18572_20201123134130.jpeg" alt="" className='insfrastuctureimage' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://dyimg77.exportersindia.com/catalog-gallery/gallery_18569_20201123134106.jpeg" alt="" className='insfrastuctureimage' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://dyimg77.exportersindia.com/catalog-gallery/gallery_18570_20201123134120.jpeg" alt="" className='insfrastuctureimage' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://dyimg77.exportersindia.com/catalog-gallery/gallery_18572_20201123134130.jpeg" alt="" className='insfrastuctureimage' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://dyimg77.exportersindia.com/catalog-gallery/gallery_18569_20201123134106.jpeg" alt="" className='insfrastuctureimage' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://dyimg77.exportersindia.com/catalog-gallery/gallery_18570_20201123134120.jpeg" alt="" className='insfrastuctureimage' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://dyimg77.exportersindia.com/catalog-gallery/gallery_18572_20201123134130.jpeg" alt="" className='insfrastuctureimage' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://dyimg77.exportersindia.com/catalog-gallery/gallery_18569_20201123134106.jpeg" alt="" className='insfrastuctureimage' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://dyimg77.exportersindia.com/catalog-gallery/gallery_18570_20201123134120.jpeg" alt="" className='insfrastuctureimage' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://dyimg77.exportersindia.com/catalog-gallery/gallery_18572_20201123134130.jpeg" alt="" className='insfrastuctureimage' />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Infrasctrure