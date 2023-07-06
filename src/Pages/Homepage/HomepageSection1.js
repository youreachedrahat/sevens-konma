import WhiteLabelContainer from "../../Components/WhiteLabelContainer";
import WhyUsContainer from "../../Components/WhyUsContainer";
import SubSec3Container from "../../Components/SubSec3Container";
import "./HomepageSection1.css";
const HomepageSection1 = () => {
  return (
    <div className="sm:pl-12 homepagesection1">
      <div className="homepagesection-1">
        <WhiteLabelContainer />
        <WhyUsContainer />
        <SubSec3Container />
      </div>
    </div>
  );
};

export default HomepageSection1;
