import "./WhyUsContainer.css";
import spiral from "../assets/circle.gif"
const WhyUsContainer = () => {
  return (
    <div className="subsec2">
      <b className="heading1 max-sm:mb-10">Why Us?</b>
      <div className="max-sm:flex-col max-sm:gap-20 max-sm:w-auto max-sm:mb-36 subsec2body">
        <div className="z-10 max-sm:pt-5 max-sm:align-middle max-sm:mr-0 card">
          <b className="big-number">40+</b>
          <div className="title3">Active White Label</div>
        </div>
        <div className="max-sm:hidden spiralcontainer">
          <img className="spiral-icon" alt="" src={spiral} />
          <div className="title4">
            <span className="integrated-with-top">Integrated with top</span>
            <b>{` `}</b>
            <span className="gaming">GAMING</span>
            <span className="integrated-with-top"> providers</span>
          </div>
        </div>
        {/* hidden in large screen */}<div className=" z-10 sm:hidden h-auto max-sm:text-center text-white text-[24px] w-[90%] self-center">
  Integrated with <br/>Top <b>Gaming</b> <br/>Providers</div>
        <div className="z-10 max-sm:align-middle max-sm:ml-0 card1">
          <b className="big-number1">6</b>
          <b className="title5">years of Expertise</b>
        </div>
      </div>
      <img className="max-sm:overflow-visible sm:hidden max-sm:left-[-58%] max-sm:top-[40%] max-sm:absolute spiral-icon" alt="" src={spiral} />
    </div>
  );
};

export default WhyUsContainer;
