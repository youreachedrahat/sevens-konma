import React from "react";
import "./SportsSection1.css";
import search from "../../assets/search.gif";

const SportsSection1 = () => {
  return (
    <div className="sportssection11 max-sm:h-auto">
      <div className="sportssection12 max-sm:h-auto max-sm:gap-2 sm:pb-10">
        <div className="sportsTop">
          <div className="rectangle max-sm:h-[130px] max-sm:px-5">
            <b className="titleSports title max-sm:h-auto  max-sm:leading-7 max-sm:text-center max-sm:text-[32px] text-[54px] max-sm:text-textColor">
              Online Sports Betting Software Solution
            </b>
          </div>
          <div className="container4 max-sm:w-[100%]" />
        </div>
        <div className="sportsbody1 max-sm:flex max-sm:justify-center max-sm:w-[100%]">
          <div className="textwhite5 w-[100%] px-16 max-sm:p-5 h-auto max-sm:text-[16px] max-sm:leading-7">
            Sevens Gaming has a team of experts in the field of sports betting
            technology, and we have developed cutting-edge software solutions to
            meet the needs of the online sports betting industry. We understand
            that the online sports betting industry is highly competitive and
            dynamic, and we know that the success of any online sports betting
            operation depends on the quality and reliability of the software
            that powers it. That is why we have developed a suite of software
            solutions designed to meet the needs of sportsbooks, bookmakers, and
            betting operators of all sizes.
          </div>
          <div className="imagecontainer max-sm:w-[100%] max-sm:h-auto max-sm:justify-center">
            <div className="imagecontainer-child max-sm:w-[300px] max-sm:h-auto" />
            <img
              className="sportimage1-icon max-sm:w-[300px] max-sm:h-auto"
              alt=""
              src={search}
            />
          </div>
          <div className="textwhite6 w-[100%] px-16 max-sm:p-5 h-auto max-sm:text-[16px] max-sm:leading-7">
            <span className="w-[100%]">
              A complete online sports betting whitelabel solution which
              includes sportsbook, casino, exchange, mobile betting, and APIs
              that enable simple integration with third-party platforms. Each of
              these solutions is designed to be{" "}
            </span>
            <b className="w-[100%] max-sm:font-normal">
              fully customizable to meet the unique needs of each individual
              client
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsSection1;
