import ProductFeaturesContainer from "../../Components/ProductFeaturesContainer";
import "./HomepageSection2.css";
import Testimonials from "../../Components/Testimonials";
const HomepageSection2 = () => {
  return (
    <div className="homepagesection2 w-[100%] max-sm:h-auto " id="productFeature" >
      {/* <img className="bg-icon" alt="" src="/bg@2x.png" /> */}
      <div className="homepage2content w-[100%] max-sm:static max-sm:h-auto pl-0">
        <div className="homepage2content-child w-[100%] max-sm:h-auto" />
        <div className="homepage2content-2 w-[100%] max-sm:h-auto max-sm:gap-2">
          <ProductFeaturesContainer />
          <Testimonials/>
        </div>
      </div>
    </div>
  );
};

export default HomepageSection2;
