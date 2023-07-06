import "./WhiteLabelContainer.css";
import wheel from "../assets/wheel.png"
import wheelmobile from "../assets/wheelmobile.png"
const WhiteLabelContainer = () => {
  return (
    <div className="max-sm:100% max-sm:flex-col-reverse max-sm:w-auto max-sm:h-auto max-sm:content-center max-sm:justify-center subsec1">
      <div className="max-sm:gap-6  max-sm:w-auto max-sm:h-auto max-sm:px-10 homepageleftbody">
        <b className="max-sm:leading-none max-sm:self-center max-sm:w-96 max-sm:h-auto heading max-sm:text-center">Now Get your own white label</b>
        <div className=" max-sm:hidden subheading">Sports Exchange/Bookmaker/Casino</div>
        <div className="max-sm:hidden textwhite8">Sevens Gaming is one of the leading iGaming development companies that provide top-notch
iGaming solutions and services. Our White label solutions and Turnkey Sports Exchange solutions are loved by our clients due to
the userfriendly interface that attracts their target audiences. We deliver the best possible
solutions to our clients in the quickest time. </div>
<div className="sm:hidden max-sm:leading-relaxed max-sm:w-auto max-sm:h-auto max-sm:text-center textwhite8">Sevens Gaming is one of the leading iGaming development companies that provide top-notch
iGaming solutions and services.</div>
        <div className="buttons">
          <div className="yellowbutton max-sm:w-52">
            <div className="master-primary-button2 max-sm:text-base  max-sm:h-16">
              <b className="button-text3 textsmall">Get started</b>
              <img
                className="line-roundedarrow-right2"
                alt=""
                src="/line-roundedarrow-right1.svg"
              />
            </div>
          </div>
          <div className="whitebutton">
            <div className="master-secondary-button  max-sm:w-44 max-sm:h-16">
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
        className="max-sm:ml-0 max-sm:justify-self-center max-sm:w-100% max-sm:h-auto sm:hidden homepageimage1-icon"
        alt=""
        src={wheelmobile}
      />
    </div>
  );
};

export default WhiteLabelContainer;
