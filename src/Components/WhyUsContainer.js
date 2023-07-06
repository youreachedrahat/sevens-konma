import "./WhyUsContainer.css";
import spiral from "../assets/circle.gif"
const WhyUsContainer = () => {
  return (
    <div className="subsec2">
      <b className="heading1">Why Us?</b>
      <div className="subsec2body">
        <div className="card">
          <b className="big-number">40+</b>
          <div className="title3">Active White Label</div>
        </div>
        <div className="spiralcontainer">
          <img className="spiral-icon" alt="" src={spiral} />
          <div className="title4">
            <span className="integrated-with-top">Integrated with top</span>
            <b>{` `}</b>
            <span className="gaming">GAMING</span>
            <span className="integrated-with-top"> providers</span>
          </div>
        </div>
        <div className="card1">
          <b className="big-number1">6</b>
          <b className="title5">years of Expertise</b>
        </div>
      </div>
    </div>
  );
};

export default WhyUsContainer;
