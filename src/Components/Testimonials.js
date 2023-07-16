import React from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from 'react-responsive';

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


  const isMobile = useMediaQuery({
    query: '(max-device-width: 500px)',
  });
  return (
    <div className="w-[100%] max-md:mb-[10px] testimonialSwiper">

      <Swiper
        allowTouchMove={true}
        centeredSlides={true}
        slidesPerView={3}
        slidesPerGroup={isMobile ? 2 : 1}
        spaceBetween={showPagination ? 10 : 30}
        pagination={showPagination ? { clickable: true } : false}
        navigation={!showPagination}
        modules={[Pagination, Navigation]}
        initialSlide={isMobile ? 0 : 1}
        className="mySwiper pl-[6rem] max-[830px]:pl-10 max-sm:pl-0"
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
          <h1 className="font-bold text-[32px] max-sm:text-[18px] w-[70%] leading-8 uppercase">Genie<br />Bet</h1>
          <p className="text-[18px] max-sm:text-[16px] mt-2 w-[80%]">Create your own script for the game</p>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col p-5  max-sm:w-[229px] max-sm:h-[229px] gap-6">
          <h1 className="font-bold text-[32px] max-sm:text-[18px] w-[70%] leading-8 uppercase">Fancy &nbsp; </h1>
          <p className="text-[18px] max-sm:text-[16px] mt-2 w-[80%]">Bet on every perspective of the game</p>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col p-5  max-sm:w-[229px] max-sm:h-[229px] gap-6">
          <h1 className="font-bold text-[32px] max-sm:text-[18px] w-[70%] leading-8 uppercase">Make your own patti</h1>
          <p className="text-[18px] max-sm:text-[16px] mt-2 w-[80%]">By Tournament/Sports Edit/on & Off anytime</p>
        </SwiperSlide>

        {isMobile && <SwiperSlide className="flex flex-col p-5  max-sm:w-[229px] max-sm:h-[229px] gap-6 sm:hidden invisible">
        </SwiperSlide>}

        {isMobile && <SwiperSlide className="flex flex-col p-5  max-sm:w-[229px] max-sm:h-[229px] gap-6 sm:hidden invisible">
        </SwiperSlide>}

        {isMobile && <SwiperSlide className="flex flex-col p-5  max-sm:w-[229px] max-sm:h-[229px] gap-6 sm:hidden invisible">
        </SwiperSlide>}

        {isMobile && <SwiperSlide className="flex flex-col p-5  max-sm:w-[229px] max-sm:h-[229px] gap-6 sm:hidden invisible">
        </SwiperSlide>}

        {isMobile && <SwiperSlide className="flex flex-col p-5  max-sm:w-[229px] max-sm:h-[229px] gap-6 sm:hidden invisible">
        </SwiperSlide>}

      </Swiper>
    </div>
  );
}


export default Testimonials;