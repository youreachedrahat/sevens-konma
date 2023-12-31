import "./Bettingsection4.css";
import people1 from "../../assets/people.gif";
import HorizonalRule from "../../Components/HorizontalRule";
import { HashLink } from "react-router-hash-link";
const Bettingsection4 = () => {
  return (
    <div className="bettingsection4 flex flex-row-reverse max-md:flex-col max-sm:bg-primary">
      <div className="flex flex-col flex-row items-start px-10 py-5 max-sm:px-5 max-sm:text-[16px] w-[60%] max-md:w-[90%] max-sm:gap-5 sm:gap-5 max-sm:text-white">
        <div
          className="lg:mt-12 w-full sm:sleading-10 mt-12 max-sm:text-justify max-sm:leading-8 sm:leading-8 sm:pt-10"
          style={{ marginTop: "0" }}
        >
          We are committed to providing our clients with a complete suite of
          solutions to help them achieve their goals and grow their businesses.
          If you're looking for a reliable and innovative sportsbook software
          provider, look no further than our Sportsbook and Betting Software
          Development Company.
        </div>
        {/*  */}
        <div className="">
          <b className="textindigobold  w-auto max-sm:h-auto  max-sm:tracking-tighter max-sm:text-[16px] max-sm:text-justify max-sm:leading-8">
            Contact us today to learn more about how we can help you to take
            your business to the next level.
          </b>
        </div>
        {/* <div className="primarybutton max-sm:p-0 max-sm:w-[160px] max-sm:h-[54px]  max-sm:mx-auto max-sm:justify-center w-[40%] sm:w-[50%] md:w-[50%]  lg:w-[20%] 2xl:w-[20%]   sm:px-0">
          <b className="button-text1 max-sm:text-[16px] sm:text-center sm:pl-4 max-sm:font-semibold max-sm:text-textColor  ">
            Contact Us
          </b> 

          <img
                className="line-roundedarrow-right2"
                alt=""
                src="/line-roundedarrow-right1.svg"
              />
           

        </div> */}
        <HashLink to="/aboutus/#contactus">
          <div className="master-primary-button">
            <img
              className="line-roundedsearch-icon"
              alt=""
              src="/line-roundedsearch1.svg"
            />
            <b className="button-text">Contact Us</b>

            <img
              className="line-roundedarrow-right"
              alt=""
              src="/line-roundedarrow-right1.svg"
            />
          </div>
        </HashLink>

        {/*  */}
      </div>
      <div>
        <img
          className="max-sm:hidden justify-center items-center flex w-full mx-0 px-0"
          alt=""
          src={people1}
        />
      </div>
    </div>
  );
};

export default Bettingsection4;
