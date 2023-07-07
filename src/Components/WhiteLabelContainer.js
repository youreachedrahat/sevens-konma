import "./WhiteLabelContainer.css";
import wheel from "../assets/wheel.png"
import wheelmobile from "../assets/wheelmobile.png"
const WhiteLabelContainer = () => {
  return (
    <div className="max-sm:100% max-sm:flex-col-reverse max-sm:h-auto max-sm:content-center max-sm:justify-center max-sm:w-full subsec1">
      <div className="max-sm:gap-6  max-sm:w-[100%] max-sm:h-auto max-sm:px-2 homepageleftbody">
        <b className="max-sm:leading-none max-sm:self-center max-sm:w-full max-sm:h-auto heading max-sm:text-center max-sm:text-[54px] text-[72px]">Now Get your own white label</b>
        <div className=" max-sm:hidden subheading text-[32px]">Sports Exchange/Bookmaker/Casino</div>
        <div className="max-sm:hidden textwhite8 text-[24px]">Sevens Gaming is one of the leading iGaming development companies that provide top-notch
iGaming solutions and services. Our White label solutions and Turnkey Sports Exchange solutions are loved by our clients due to
the userfriendly interface that attracts their target audiences. We deliver the best possible
solutions to our clients in the quickest time. </div>
<div className="sm:hidden max-sm:leading-relaxed max-sm:w-auto max-sm:h-auto max-sm:text-center textwhite8 max-sm:text-[16px]">Sevens Gaming is one of the leading iGaming development companies that provide top-notch
iGaming solutions and services.</div>
        <div className="buttons max-sm:gap-0">
        <div className="yellowbutton ">
  <div className="master-primary-button2 max-sm:p-0 max-sm:w-[159px] max-sm:h-[54px] max-sm:mx-auto max-sm:justify-center">
    <b className="button-text3 textsmall">Get started</b>
    <img
      className="line-roundedarrow-right2"
      alt=""
      src="/line-roundedarrow-right1.svg"
    />
  </div>
</div>
          <div className="whitebutton">
            <div className="master-secondary-button  max-sm:w-[159px] max-sm:h-[54px]">
              <b className="button-text3 textsmall">Learn More</b>
            </div>
          </div>
        </div>
      </div>
      <img
        className="max-sm:hidden homepageimage1-icon"
        alt=""
        src={wheel}
      />
      <img
        className="max-sm:mx-auto max-sm:justify-self-center max-sm:h-auto sm:hidden w-[100%] homepageimage1-icon"
        alt=""
        src={wheelmobile}
      />
    </div>
  );
};

export default WhiteLabelContainer;
