import "./SportsSection31.css";
import { HashLink } from "react-router-hash-link";
const SportsSection31 = () => {
  return (
    <div className="sportssection3 max-sm:p-5 sm:px-[64px] max-sm:h-auto ">
      <div className="sportssection-3 max-sm:h-auto">
        {/* <div className="ellipse5 w-full" /> */}
        <div className="sportssection3body  max-sm:flex max-sm:justify-center max-sm:w-[100%]">
          <div className="textwhite w-[100%]  max-sm:p-5 h-auto max-sm:text-[16px] max-sm:leading-7">
            If you are looking for a reliable and experienced provider of online
            sports betting software solutions, look no further than our company.
            <br />
            <br />
            <b>
              Contact us today to learn more about our solutions and how we can
              help you achieve success in the online sports betting industry.
            </b>
          </div>
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
          <br />
        </div>
      </div>
    </div>
  );
};

export default SportsSection31;
