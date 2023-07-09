import "./SportsSection2.css";
import OX from "../../assets/OX.gif";
const SportsSection2 = () => {
  return (
    <div className="sportssection2 max-sm:w-full max-sm:pt-5">
      <div className="sportssection-2 max-sm:w-full max-sm:flex-col max-sm:p-0  sm:gap-[0] max-sm:gap-[2.81rem]">
        <img className="sportsimage2-icon max-sm:hidden" alt="" src="/XO.gif" />
        <div className="key-features-about-our-betting-parent max-sm:relative max-sm:w-[100%] max-sm:gap-[50px]">
          <b className="key-features-about max-sm:w-auto max-sm:text-[32px] max-sm:p-5 max-sm:leading-9 sm:hidden">
            Key features about our Betting Software Solutions
          </b>
          <b className="key-features-about sm:text-[32px] sm:leading-9 sm:w-auto sm:right-9 max-sm:hidden">
            Key features about our <br /> Betting Software Solutions
          </b>
          <div className="sportsrectangle max-sm:w-[100%] max-sm:block max-sm:p-3 max-sm:h-auto sm:h-auto sm:px-0 sm:w-[100%]">
            <div className="sportsrectanglewrapper max-sm:w-[100%] max-sm:justify-center sm:w-[100%] sm:justify-center ">
              <div className="textindigo2 max-sm:w-[100%] max-sm:p-3 max-sm:text-[16px] max-sm:leading-relaxed ">
                Our comprehensive sportsbook platform is the backbone of our
                online sports betting software solutions. It includes a wide
                range of features designed to provide users with a seamless and
                enjoyable betting experience. These features include a
                user-friendly interface, live betting, in-play betting, multiple
                payment options, and more.
              </div>
            </div>

            <div className="ellipse6 max-sm:hidden" />
          </div>
          <img
            className="frame-child max-sm:w-[79px]"
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
