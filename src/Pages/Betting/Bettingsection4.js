import "./Bettingsection4.css";
import people1 from "../../assets/people.gif";
import HorizonalRule from "../../Components/HorizontalRule";
const Bettingsection4 = () => {
  return (
    <div className="bettingsection4">
      <div className="flex flex-col lg:flex-row-reverse items-start px-20 py-5 max-sm:px-5 max-sm:text-[16px]">
        <div
          className="lg:mt-12 w-full leading-10 mt-12 lg:px-20"
          style={{ marginTop: "0" }}
        >
          We are committed to providing our clients with a complete suite of
          solutions to help them achieve their goals and grow their businesses.
          If you're looking for a reliable and innovative sportsbook software
          provider, look no further than our Sportsbook and Betting Software
          Development Company.
        </div>
        {/*  */}
        {/* <div className="">
          <b className="textindigobold max-sm:leading-7 max-sm:w-auto max-sm:h-auto max-sm:text-justify max-sm:tracking-tighter max-sm:text-[16px]">
            Contact us today to learn more about how we can help you to take
            your business to the next level.
          </b>
        </div>
        <div className="primarybutton max-sm:p-0 max-sm:w-[160px] max-sm:h-[54px] max-sm:mx-auto max-sm:justify-center">
          <b className="button-text1 max-sm:text-[16px] max-sm:font-semibold max-sm:text-textColor  ">
            Contact Us
          </b>
        </div> */}

        {/*  */}
        <div>
          <img
            className="max-lg:hidden justify-center items-center flex w-full mx-0 px-0"
            alt=""
            src={people1}
          />
        </div>
      </div>
    </div>
  );
};

export default Bettingsection4;
