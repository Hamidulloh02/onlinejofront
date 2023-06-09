import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./mediaStyle.css"



// import required modules
import { Pagination, Navigation, HashNavigation } from "swiper";

function Medialar() {
  return (
    // <div>
    //    <div className="article__title__info">
    //       <div className='article__title'>Medialar</div>
    //       <div ><button className="article__btn">Barchasi</button></div>
    //     </div>
    //   <div className=" full__video">
    //     <div class="swiffy-slider slider-item-show3  slider-nav-outside .slider-item-reveal slider-nav-animation slider-nav-animation-fadein">
    //       <ul class="slider-container ">
    //         <li class="">
    //           <div class="card shadow h-70 ">
    //             <div class="ratio ratio-16x9 ">
    //             <iframe className='video__m' width="560" height="315" src="https://www.youtube.com/embed/UNNpiVWgypM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //             </div>
    //           </div>
    //         </li>
    //         <li class="">
    //           <div class="card  h-70">
    //             <div class="ratio ratio-16x9">
    //             <iframe width="560" height="315" src="https://www.youtube.com/embed/aJf6IsQkmiQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //             </div>
    //           </div>
    //         </li>
    //         <li class="slide-visible">
    //           <div class="card shadow h-70">
    //             <div class="ratio ratio-16x9">
    //             <iframe width="560" height="315" src="https://www.youtube.com/embed/OoU0IP9Vhds" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //             </div>
    //           </div>
    //         </li>
    //         <li class="slide-visible">
    //           <div class="card shadow h-70">
    //             <div class="ratio ratio-16x9">
    //             <iframe width="560" height="315" src="https://www.youtube.com/embed/P9nu2OFIMJQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //             </div>
    //           </div>
    //         </li>
    //         <li class="">
    //           <div class="card shadow h-70">
    //             <div class="ratio ratio-16x9">
    //             <iframe width="560" height="315" src="https://www.youtube.com/embed/rpOm5YmbRbw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //             </div>
    //           </div>
    //         </li>
    //         <li class="">
    //           <div class="card shadow h-70">
    //             <div class="ratio ratio-16x9">
    //             <iframe width="560" height="315" src="https://www.youtube.com/embed/QmbT8ytZYxY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //             </div>
    //           </div>
    //         </li>
    //       </ul>

    //       <button type="button" class="slider-nav" aria-label="Go left"></button>
    //       <button type="button" class="slider-nav slider-nav-next" aria-label="Go left"></button>

    //       <div class="slider-indicators">
    //         <button class="" aria-label="Go to slide"></button>
    //         <button aria-label="Go to slide"></button>
    //         <button aria-label="Go to slide" class="active"></button>
    //         <button aria-label="Go to slide" class=""></button>
    //         <button aria-label="Go to slide" class=""></button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Swiper
    slidesPerView={1}
    spaceBetween={10}
    hashNavigation={{
      watchState: true,
    }}
    pagination={{
      clickable: true,
    }}
    breakpoints={{
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }}
    navigation={true}
    modules={[Pagination, Navigation, HashNavigation]}
    className="mySwiper container"
  >
    <SwiperSlide data-hash="slide1">
    <iframe className=' p-2 Youtobevideo'  src="https://www.youtube.com/embed/UNNpiVWgypM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </SwiperSlide>
    <SwiperSlide data-hash="slide2">
    <iframe className=' p-2 Youtobevideo'  src="https://www.youtube.com/embed/aJf6IsQkmiQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </SwiperSlide>
    <SwiperSlide data-hash="slide3">
    <iframe className=' p-2 Youtobevideo'  src="https://www.youtube.com/embed/P9nu2OFIMJQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </SwiperSlide>
    <SwiperSlide data-hash="slide4">
    <iframe className=' p-2 Youtobevideo'  src="https://www.youtube.com/embed/QmbT8ytZYxY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </SwiperSlide>
  </Swiper>
  )
}

export default Medialar