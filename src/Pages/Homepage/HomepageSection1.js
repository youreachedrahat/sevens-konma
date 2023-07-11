import WhiteLabelContainer from "../../Components/WhiteLabelContainer";
import WhyUsContainer from "../../Components/WhyUsContainer";
import SubSec3Container from "../../Components/SubSec3Container";
import "./HomepageSection1.css";
const HomepageSection1 = () => {
  return (
    <div className=" homepagesection1 max-sm:p-0 max-lg:p-0 w-100% max-lg:pb-4 sm:pb-8">
      <div className="homepagesection-1 w-100%">
        <WhiteLabelContainer />
        <WhyUsContainer />
        <SubSec3Container />
      </div>
    </div>
  );
};

export default HomepageSection1;
