import { useMemo } from "react";
import "./CostEffectiveContainer.css";
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
    <div className="yellowcard max-sm:flex max-sm:justify-center max-sm:w-[334px] max-sm:h-[274px] max-sm:rounded-[12px]">
      {/* <img className="yellowmask-icon" alt="" src="/yellowmaskx.png" /> */}
      {/* <div className="yellowmask-icon"></div> */}
      <div className="yellowrectangle max-sm:h-[481px] my-auto ">
        <div className="yellowbody max-sm:flex max-sm:flex-col max-sm:gap-2 max-sm:items-center my-auto">
          <div className="mx-auto w-[100%]">
            <img
              className="yellowimage-icon max-sm:hidden mx-auto"
              alt=""
              src={whiteLabelText}
              style={yellowImageIconStyle}
            />
            <b className="bigtext max-sm:text-textColor max-sm:text-[24px] leading-[20px]">{turnkeySolutionText}</b>
            <div className="paragraph1 max-sm:text-[16px] max-sm:w-[85%]">{turnkeySolutionDescriptio}</div>
          </div>
          <div className="master-primary-button3 px-0 py-0 w-[110px]">
            <div className="button-text5 max-sm:text-[16px]">Learn more</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostEffectiveContainer;
