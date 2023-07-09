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
    <div className="yellowcard flex max-sm:justify-center ">
      {/* <img className="yellowmask-icon" alt="" src="/yellowmaskx.png" /> */}
      <div className="yellowmask-icon"></div>
      <div className="yellowrectangle max-sm:h-100%">
        <div className="yellowbody max-sm:flex max-sm:flex-col max-sm:items-center ">
          <div className="yellowbody max-sm:my-auto">
            <img
              className="yellowimage-icon max-sm:hidden"
              alt=""
              src={whiteLabelText}
              style={yellowImageIconStyle}
            />
            <b className="bigtext max-sm:text-textColor">{turnkeySolutionText}</b>
            <div className="paragraph1">{turnkeySolutionDescriptio}</div>
          </div>
          <div className="master-primary-button3">
            <div className="button-text5">Learn more</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostEffectiveContainer;
