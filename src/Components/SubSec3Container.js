import CostEffectiveContainer from "./CostEffectiveContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SubSec3Container.css";
import "./WhiteLabelContainer.css";
import rocket from "../assets/rocket.png";
import diamond from "../assets/diamond.png";

const SubSec3Container = () => {
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
    <div className="w-[100%] max-sm:h-auto subsec3 max-sm:pb-10">
      {/* <div className="heading2 max-sm:leading-none max-sm:w-auto max-sm:h-auto whitespace-normal max-w-full text-[72px] max-sm:text-[54px]">
        <b>Our Casino Software Solutions</b>
        </div> */}

      <div className="heading2 max-sm:leading-none max-sm:w-auto max-sm:h-auto whitespace-normal max-w-full text-4xl max-sm:text-3xl">
        <b className="text-4xl max-sm:text-[32px] leading-none">
          Our Casino
          <br />
          Software Solutions
        </b>
      </div>
      <div className="w-[100%]">


      <Swiper
        allowTouchMove={showPagination}
        initialSlide={showPagination ? 0 : 0}
        centeredSlides={false}
        slidesPerView={1}
        autoplay={true}
        spaceBetween={showPagination ? 30 : 50}
        navigation={showPagination}
        modules={[Navigation]}
        className="mySwiper2 w-[100%]"
      >
        <SwiperSlide className="">
        
        <CostEffectiveContainer
          whiteLabelText={rocket}
          turnkeySolutionText="White Label"
          turnkeySolutionDescriptio="Cost-effective, comprehensive solution aimed at launching your own casino or sports exchange in the shortest period of time"
          propWidth="8.81rem"
          propHeight="8.81rem"
          />
          </SwiperSlide>

          <SwiperSlide className="">
        <CostEffectiveContainer
          whiteLabelText={diamond}
          turnkeySolutionText="Turnkey Solution"
          turnkeySolutionDescriptio="The turn key business is a perfect solution for those who would like to get a self-owned multi-functional platform"
          propWidth="8.81rem"
          propHeight="8.81rem"
          />
          </SwiperSlide>


</Swiper>
      </div>
    </div>
  );
};

export default SubSec3Container;
