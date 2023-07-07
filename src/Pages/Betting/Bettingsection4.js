import "./Bettingsection4.css";
import people1 from "../../assets/people.gif";
import HorizonalRule from "../../Components/HorizontalRule";
const Bettingsection4 = () => {
  return (
    <div className="bettingsection4 max-sm:px-0 max-sm:w-auto max-sm:h-auto max-sm:py-0">
      <div className="bettingbody-4 max-sm:w-auto max-sm:h-auto max-sm:flex-col max-sm:gap-0">
      <div className="bettingsection3text max-sm:w-[100%] max-sm:h-auto sm:hidden text-justify p-10 text-[16px] leading-8 tracking-wide">
          Also we are pride ourselves on our 24x7 customer service. We understand that your success is our success, which is why we are dedicated to providing you with the best possible service and support. Our team is always available to answer your questions, provide guidance, and help you to resolve any issues that you may encounter.
        </div>
        <img
          className="bettingimage4-icon max-sm:w-auto max-sm:h-auto max-sm:hidden"
          alt=""
          src={people1}
        />
        <img
          className="bettingimage4-icon max-sm:w-auto max-sm:h-auto sm:hidden"
          alt=""
          src="/bettingimage4@1x.png"
        />
        <div className="hRule sm:hidden">
        {/* <HorizonalRule /> */}
        </div>
        <div className="bettingsection4-left max-sm:w-auto max-sm:h-auto max-sm:bg-primary max-sm:text-white max-sm:pb-10">
          <div className="textbody max-sm:w-auto max-sm:h-auto max-sm:px-10 max-sm:py-5">
            <div className="textindigo max-sm:w-auto max-sm:h-auto max-sm:text-justify max-sm:text-[16px] max-sm:tracking-tighter">{`We are committed to providing our clients with a complete suite of solutions to help them achieve their goals and grow their businesses. If you're looking for a reliable and innovative sportsbook software provider, look no further than our Sportsbook and Betting Software Development Company. `}</div>
            <b className="textindigobold max-sm:w-auto max-sm:h-auto max-sm:text-justify max-sm:tracking-tighter max-sm:text-[16px]">
              Contact us today to learn more about how we can help you to take
              your business to the next level.
            </b>
          </div>
          <div className="primarybutton max-sm:p-0 max-sm:w-[160px] max-sm:h-[54px] max-sm:mx-auto max-sm:justify-center">
            <b className="button-text1 max-sm:text-[16px] ">Contact Us</b>
            <img
              className="line-roundedarrow-right1"
              alt=""
              src="/line-roundedarrow-right3.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bettingsection4;
