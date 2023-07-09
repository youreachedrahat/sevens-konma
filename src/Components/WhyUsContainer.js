import "./WhyUsContainer.css";
import spiral from "../assets/circle.gif"
const WhyUsContainer = () => {
  return (
    <div className="subsec2 max-sm:gap-0 max-sm:mb-[200px]">
      <b className="heading1 max-sm:uppercase max-sm:mb-10 max-sm:text-[32px]">Why Us?</b>
      <div className="max-lg:flex-col max-lg:gap-9 max-sm:z-10 max-sm:w-auto max-sm:mb-36 max-lg:mb-20 subsec2body">
        <div className="z-10 max-sm:pt-5 max-sm:align-middle max-sm:mr-0 card max-sm:gap-2">
          <b className="big-number max-sm:text-[44px]">40+</b>
          <div className="title3 max-sm:font-bold max-sm:text-[22px] max-sm:w-[80%] max-sm:mx-auto max-sm:leading-7">Active White Labels</div>
        </div>
        <div className="max-sm:hidden spiralcontainer overflow-visible">
          <img className="spiral-icon max-lg:w-auto overflow-visible" alt="" src={spiral} />
          <div className="title4">
            <span className="integrated-with-top">Integrated with top</span>
            <b>{` `}</b>
            <span className="gaming">GAMING</span>
            <span className="integrated-with-top"> providers</span>
          </div>
        </div>
        {/* hidden in large screen */}<div className=" z-10 sm:hidden max-sm:font-semibold h-auto max-sm:text-center max-sm:leading-7 text-white text-[24px] max-sm:text-[22px] w-[90%] self-center">
  Integrated with <br/>Top <b className="max-sm:font-semibold">Gaming</b> <br/>Providers</div>
        <div className="z-10 max-sm:align-middle max-sm:ml-0 card1 max-sm:gap-0">
          <b className="big-number1 max-sm:text-[44px] ">6</b>
          <b className="title5 max-sm:text-[22px]   max-sm:mx-auto">years of Expertise</b>
        </div>
      </div>
      <img className="w-[370px] max-sm:overflow-visible sm:hidden max-sm:left-[-60%] max-sm:mt-[-150%] max-sm:relative" alt="" src={spiral} />
    </div>
  );
};

export default WhyUsContainer;
