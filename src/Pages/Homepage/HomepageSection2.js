import ProductFeaturesContainer from "../../Components/ProductFeaturesContainer";
import InPlayBettingContainer from "../../Components/InPlayBettingContainer";
import CarouselTestimonials from "../../Components/CarouselTestimonials/CarouselTestimonials";
import CardStack from "../../Components/CarouselTestimonials";
import cards from "../../Components/Card"

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
          {/* <CardStack cards={cards}/> */}
          {/* <CarouselTestimonials/> */}
        </div>
      </div>
    </div>
  );
};

export default HomepageSection2;
