import ProductFeaturesContainer from "../../Components/ProductFeaturesContainer";
import InPlayBettingContainer from "../../Components/InPlayBettingContainer";
import TestimonialCards from "../../Components/CarouselTestimonials/TestimonialCards";
import "./HomepageSection2.css";
const HomepageSection2 = () => {
  return (
    <div className="homepagesection2">
      {/* <img className="bg-icon" alt="" src="/bg@2x.png" /> */}
      <div className="homepage2content">
        <div className="homepage2content-child" />
        <div className="homepage2content-2">
          <ProductFeaturesContainer />
          {/* <InPlayBettingContainer /> */}
          <TestimonialCards/>
        </div>
      </div>
    </div>
  );
};

export default HomepageSection2;
