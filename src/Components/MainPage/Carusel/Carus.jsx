import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./carusel.css"
// import "./";

//lazy
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import required modules
import { Navigation, Autoplay, } from "swiper";

export default function App() {
  return (
    <>
      <Swiper spaceBetween={60}
        centeredSlides={true}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true} modules={[Navigation, Autoplay,]} className="mySwiper SwiperCarus mt-4 mb-4">
        <SwiperSlide className="SwiperCarus">
          <LazyLoadImage
            className="SwiperCarusImg"
            alt="AboutWeImg"
            effect="blur"
            src="./images/journalcarus.jpg"  />
        </SwiperSlide>
        <SwiperSlide className="SwiperCarus">
        <LazyLoadImage
            className="SwiperCarusImg"
            alt="AboutWeImg"
            effect="blur"
            src="./images/faktorRek.jpg"  />
        </SwiperSlide>
        <SwiperSlide className="SwiperCarus">
        <LazyLoadImage
            className="SwiperCarusImg"
            alt="AboutWeImg"
            effect="blur"
            src="./images/pegas02.jpg"  />
        </SwiperSlide>
        <SwiperSlide className="SwiperCarus">
        <LazyLoadImage
            className="SwiperCarusImg"
            alt="AboutWeImg"
            effect="blur"
            src="./images/reklama01.jpg"  />
        </SwiperSlide>
      </Swiper>
    </>
  );
}