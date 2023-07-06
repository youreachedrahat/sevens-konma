import CostEffectiveContainer from "./CostEffectiveContainer";
import "./SubSec3Container.css";
import rocket from "../assets/rocket.png"
import diamond from "../assets/diamond.png"
const SubSec3Container = () => {
  return (
    <div className="max-sm:w-auto max-sm:h-auto subsec3">
      <div className="heading2 max-sm:leading-none max-sm:w-auto max-sm:h-auto whitespace-normal max-w-full">
        <b>Our Casino Software Solutions</b>
        </div>
      <div className="yellowcards">
        <CostEffectiveContainer
          whiteLabelText={rocket}
          turnkeySolutionText="White Label"
          turnkeySolutionDescriptio="Cost-effective, comprehensive solution aimed at launching your own casino or sports exchange in the shortest period of time"
          propWidth="8.81rem"
          propHeight="8.81rem"
        />
        <CostEffectiveContainer
          whiteLabelText={diamond}
          turnkeySolutionText="Turnkey Solution"
          turnkeySolutionDescriptio="The turn key business is a perfect solution for those who would like to get a self-owned multi-functional platform"
          propWidth="8.81rem"
          propHeight="8.81rem"
        />
      </div>
    </div>
  );
};

export default SubSec3Container;
