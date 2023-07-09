import WhiteLabelContainer from "../../Components/WhiteLabelContainer";
import WhyUsContainer from "../../Components/WhyUsContainer";
import SubSec3Container from "../../Components/SubSec3Container";
import "./HomepageSection1.css";
const HomepageSection1 = () => {
  return (
    <div className="lg:pl-12 homepagesection1 max-sm:p-0 max-lg:p-0 w-100%">
      <div className="homepagesection-1 w-100%">
        <WhiteLabelContainer />
        <WhyUsContainer />
        <SubSec3Container />
      </div>
    </div>
  );
};

export default HomepageSection1;
