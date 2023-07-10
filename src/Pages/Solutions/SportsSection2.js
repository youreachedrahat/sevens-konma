import "./SportsSection2.css";
import OX from "../../assets/OX.gif";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";



// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const SportsSection2 = () => {
  return (
    <div className="sportssection2 w-full max-sm:pt-5">
      <div className="sportssection-2 w-full max-sm:flex-col max-sm:p-0 max-sm:gap-[2.81rem]">
        <img className="sportsimage2-icon max-sm:hidden" alt="" src="/XO.gif" />
        <div className="key-features-about-our-betting-parent max-sm:relative w-[100%] max-sm:gap-[50px]">
          <b className="key-features-about w-[100%] max-sm:text-[32px] max-sm:p-5 max-sm:leading-9">
            Key features about our Betting Software Solutions
          </b>
          <div className="sportsrectangle w-[100%] max-sm:block max-sm:p-3 max-sm:h-auto">
            <div className="bg-yellow-400 py-7 pl-7 pr-8 rounded-[50px] max-sm:rounded-[25px]">             
 <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[ Autoplay, Pagination]}
        className="mySwiper3"
      >
        <SwiperSlide className=" max-sm:w-[100%] max-sm:px-2 max-sm:py-0 max-sm:text-[16px] textindigo2">
        Our comprehensive sportsbook platform is the backbone of our online sports betting software solutions. It includes a wide range of features designed to provide users with a seamless and enjoyable betting experience. These features include a user-friendly interface, live betting, in-play betting, multiple payment options, and more.
        </SwiperSlide>
        <SwiperSlide className=" max-sm:w-[100%] max-sm:px-2 max-sm:py-0 max-sm:text-[16px] textindigo2">
        Our white-label solution is a fully customizable platform that allows betting operators to create a unique brand identity and market their sportsbook to their target audience. This solution is ideal for startups and small betting operators who are looking to enter the market quickly and cost-effectively.
        </SwiperSlide>
        <SwiperSlide className=" max-sm:w-[100%] max-sm:px-2 max-sm:py-0 max-sm:text-[16px] textindigo2">
        Our mobile betting platform is designed to meet the needs of users who prefer to place bets on the go. It includes all the features of our comprehensive sportsbook platform, but it is optimized for mobile devices and offers a responsive and user-friendly interface. 
        </SwiperSlide>
        <SwiperSlide className=" max-sm:w-[100%] max-sm:px-2 max-sm:py-0 max-sm:text-[16px] textindigo2">
        Our API is a flexible and scalable solution that allows betting operators to integrate our software with third-party platforms such as CRM systems, payment gateways, and affiliate programs. This solution is ideal for betting operators who are looking to expand their reach and increase their revenue streams.
        </SwiperSlide>
        <SwiperSlide className=" max-sm:w-[100%] max-sm:px-2 max-sm:py-0 max-sm:text-[16px] textindigo2">
        At our company, we are committed to providing our clients with the best possible online sports betting software solutions. We understand that each client has unique needs and requirements, and we work closely with each of our clients to deliver customized solutions that meet their specific needs. 
        </SwiperSlide>
      </Swiper>

            </div>
            <div className="ellipse6 max-sm:hidden" />
          </div>
          <img
            className="frame-child max-sm:w-[79px] invisible"
            alt=""
            src="/group-39469.svg"
          />
        </div>
        <img className="sportsimage2-icon max-sm:hidden" alt="" src="/XO.gif" />
        <div className="sm:hidden w-[100%]">
          <img className="h-[118px] w-[100%] object-cover" alt="" src={OX} />
        </div>
      </div>
    </div>
  );
};
export default SportsSection2;
