import "./ProductFeaturesContainer.css";
const ProductFeaturesContainer = () => {
  return (
    <div className="homepagetop">
      <div className="homepagetext2 mt-[40px] mb-[-40px]">
        <b className="headingsection2 max-sm:leading-none max-sm:self-center max-sm:w-full max-sm:h-auto heading max-sm:text-center max-sm:text-[54px] text-[72px]">
          Product Features
        </b>
        <b className="paragraphsection2 max-sm:hidden">
          We offer a range of game providers with suitable conditions, plus a
          wide range of other services
        </b>
      </div>
      <div className="button mt-[60px] mb-[-60px]">
        <div className="buttonhomepage2">
          <b className="button-text6 text-center">Get started</b>
          <img
            className="line-roundedarrow-right3"
            alt=""
            src="/line-roundedarrow-right.svg"
          />
        </div>
      </div>
      <img className="gear-icon" alt="" src="/gear@2x.png" />
    </div>
  );
};

export default ProductFeaturesContainer;
