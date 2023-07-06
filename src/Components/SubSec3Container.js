import CostEffectiveContainer from "./CostEffectiveContainer";
import "./SubSec3Container.css";
const SubSec3Container = () => {
  return (
    <div className="subsec3">
      <b className="heading2">Our Casino Software Solutions</b>
      <div className="yellowcards">
        <CostEffectiveContainer
          whiteLabelText="/yellowimage@2x.png"
          turnkeySolutionText="White Label"
          turnkeySolutionDescriptio="Cost-effective, comprehensive solution aimed at launching your own casino or sports exchange in the shortest period of time"
          propWidth="8.81rem"
          propHeight="8.81rem"
        />
        <CostEffectiveContainer
          whiteLabelText="/yellowimage1@2x.png"
          turnkeySolutionText="Turnkey Solution"
          turnkeySolutionDescriptio="The turn key business is a perfect solution for those who would like to get a self-owned multi-functional platform"
          propWidth="10.13rem"
          propHeight="10.13rem"
        />
      </div>
    </div>
  );
};

export default SubSec3Container;
