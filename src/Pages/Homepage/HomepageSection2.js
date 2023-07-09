import ProductFeaturesContainer from "../../Components/ProductFeaturesContainer";
import InPlayBettingContainer from "../../Components/InPlayBettingContainer";
import TestimonialCards from "../../Components/CarouselTestimonials/TestimonialCards";
import "./HomepageSection2.css";
import Testimonials from "../../Components/Testimonials";
const HomepageSection2 = () => {
  return (
    <div className="homepagesection2 w-[100%] max-sm:h-auto">
      {/* <img className="bg-icon" alt="" src="/bg@2x.png" /> */}
      <div className="homepage2content w-[100%] max-sm:static max-sm:h-auto">
        <div className="homepage2content-child w-[100%] max-sm:h-auto" />
        <div className="homepage2content-2 w-[100%] max-sm:h-auto">
          <ProductFeaturesContainer />
          {/* <InPlayBettingContainer /> */}
          {/* <TestimonialCards/> */}
          <Testimonials/>
        </div>
      </div>
    </div>
  );
};

export default HomepageSection2;
