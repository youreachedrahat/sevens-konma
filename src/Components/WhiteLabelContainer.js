import "./WhiteLabelContainer.css";
import wheel from "../assets/wheel.png";
import wheel2 from "../assets/wheel2.png";
import wheelmobile from "../assets/wheelmobile.png";
const WhiteLabelContainer = () => {
  return (
    <div className="w-100% max-lg:flex-col-reverse max-lg:h-auto max-sm:content-center max-lg:justify-center max-lg:w-full subsec1">
      <div className="max-lg:gap-6 w-[50%] max-lg:w-[100%] max-sm:h-auto  homepageleftbody">
        <b className="max-sm:leading-10 max-lg:self-center max-sm:w-[60%] maxlg:mx-auto max-sm:h-auto heading max-lg:text-center max-sm:text-[32px] text-[72px]">
          Now Get your own white label
        </b>
        <div className=" max-sm:hidden subheading text-[32px] max-lg:mx-auto max-lg:w-[100%]">
          Sports Exchange/Bookmaker/Casino
        </div>
        <div className="max-sm:hidden textwhite8 text-[24px] max-lg:mx-auto max-lg:px-10 max-lg:w-[100%] max-lg:m-0">
          Sevens Gaming is one of the leading iGaming development companies that
          provide top-notch iGaming solutions and services. Our White label
          solutions and Turnkey Sports Exchange solutions are loved by our
          clients due to the userfriendly interface that attracts their target
          audiences. We deliver the best possible solutions to our clients in
          the quickest time.{" "}
        </div>
        <div className="sm:hidden px-5 max-sm:leading-7 max-sm:w-auto max-sm:h-auto max-sm:text-center textwhite8 max-sm:text-[16px]">
          Sevens Gaming is one of the leading iGaming development companies that
          provide top-notch iGaming solutions and services.
        </div>
        <div className="buttons max-sm:gap-0 max-sm:w-auto max-sm:h-auto mx-auto max-sm:text-[16px] sm:text-[24px]">
          <div className="yellowbutton">
            <div className="master-primary-button2 max-sm:p-0 max-sm:w-[159px] w-[240px] max-sm:h-[54px] max-sm:mx-auto max-sm:justify-center">
              <b className="button-text3 textsmall max-sm:font-semibold">Get started</b>
              <img
                className="line-roundedarrow-right2"
                alt=""
                src="/line-roundedarrow-right1.svg"
              />
            </div>
          </div>
          <div className="whitebutton">
            <div className="master-secondary-button  max-sm:w-[159px] w-[240px] max-sm:h-[54px]">
              <b className="button-text3 textsmall max-sm:font-semibold">Learn More</b>
            </div>
          </div>
        </div>
      </div>
      <div className="homepageimage1-icon w-[50%] mx-auto overflow-visible max-lg:w-[100%] justify-self-center">

      <img className="max-lg:hidden w-full" alt="" src={wheel} />
      <img className="max-sm:hidden lg:hidden w-full mx-auto " alt="" src={wheel2} />
      </div>
      <img
        className="max-sm:mx-auto max-sm:justify-self-center max-sm:h-auto sm:hidden pt-[58px] w-[100%] homepageimage1-icon"
        alt=""
        src={wheelmobile}
      />
    </div>
  );
};

export default WhiteLabelContainer;
