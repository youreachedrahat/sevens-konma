import React from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Testimonials.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  const [showPagination, setShowPagination] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setShowPagination(screenWidth < 640);
    };

    handleResize(); // Check initial screen width
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="w-100%">
      <Swiper
        centeredSlides={false}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        spaceBetween={showPagination ? 10 : 30}
        pagination={showPagination ? { clickable: true } : false}
        navigation={!showPagination}
        modules={[Pagination, Navigation]}
        // initialSlide={showPagination? 0 : 2}
        className="mySwiper"
      >
        <SwiperSlide className="flex flex-col p-5  max-sm:h-[229px] gap-6">
          <h1 className="font-bold text-[32px] max-sm:text-[18px] w-[70%] leading-8 uppercase">In-Play betting</h1>
          <p className="text-[18px] max-sm:text-[16px] w-full">Better Live Betting Experience</p>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col p-5  max-sm:w-[229px] max-sm:h-[229px] gap-6">
          <h1 className="font-bold text-[32px] max-sm:text-[18px] w-[70%] leading-8 uppercase">
            <img src="/live.gif" className="w-[164px] max-sm:w-[90px] mx-auto"></img>
            Streaming</h1>
          <p className="text-[18px] max-sm:text-[16px] mt-2 w-[80%]">check every update for your favourite sports</p>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col p-5  max-sm:w-[229px] max-sm:h-[229px] gap-6">
          <h1 className="font-bold text-[32px] max-sm:text-[18px] w-[70%] leading-8 uppercase">Genie<br/>Bet</h1>
          <p className="text-[18px] max-sm:text-[16px] mt-2 w-[80%]">Create your own script for the game</p>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col p-5  max-sm:w-[229px] max-sm:h-[229px] gap-6">
Slide 4
        </SwiperSlide>
      </Swiper>
    </div>
  );
}


export default Testimonials;