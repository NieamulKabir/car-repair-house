
import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";


import slide1 from "../../../img/slider/slider1.jpg";
import slide2 from "../../../img/slider/slider2.jpg";
import slide3 from "../../../img/slider/slider3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./SwiperStyle.css";


// import Swiper core and required modules
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);





const Carousel = () => {
    return (
        <div className='mb-10'>
           
            <div className=''>
                <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                    "delay": 3000,
                    "disableOnInteraction": false
                }} pagination={{
                    "clickable": true
                }} navigation={true} className="mySwiper">
                    <SwiperSlide>
                        <img className='w-full h-[300px] lg:h-[500px] object-cover' src={slide1} alt="" />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[300px] lg:h-[500px] object-cover' src={slide2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[300px] lg:h-[500px] object-cover' src={slide3} alt="" />
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default Carousel;