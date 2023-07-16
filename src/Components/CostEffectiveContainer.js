import { useMemo } from "react";
import "./CostEffectiveContainer.css";
import { Link } from "react-router-dom";
const CostEffectiveContainer = ({
  whiteLabelText,
  turnkeySolutionText,
  turnkeySolutionDescriptio,
  propWidth,
  propHeight,
}) => {
  const yellowImageIconStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div className="yellowcard max-sm:flex max-sm:justify-center max-sm:w-[334px] max-sm:h-[274px] max-sm:rounded-[12px] ">
      {/* <img className="yellowmask-icon" alt="" src="/yellowmaskx.png" /> */}
      {/* <div className="yellowmask-icon"></div> */}
      <div className="yellowrectangle max-sm:h-[274px] h-[481px] my-auto mx-auto max-sm:rounded-[12px]">
        <div className="yellowbody max-sm:flex max-sm:flex-col  max-sm:items-center my-auto mx-auto">
          <div className="mx-auto w-[100%] flex flex-col gap-5 mb-5 max-sm:pt-10 max-sm:gap-0">
            <img
              className="yellowimage-icon max-sm:hidden mx-auto"
              alt=""
              src={whiteLabelText}
              style={yellowImageIconStyle}
            />
            <b className="bigtext max-sm:text-textColor max-sm:text-[24px] leading-normal">
              {turnkeySolutionText}
            </b>
            <div className="paragraph1 max-sm:text-[16px] max-sm:w-[85%] mx-auto ">
              {turnkeySolutionDescriptio}
            </div>
          </div>
          <Link to="/betting">
            <div className="master-primary-button3 max-sm:mt-[-5px] px-0 py-0 w-[110px]">
              <div className="button-text5 max-sm:text-[16px]">Learn more</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CostEffectiveContainer;
