import "./ProductFeaturesContainer.css";
const ProductFeaturesContainer = () => {
  return (
    <div className="homepagetop max-sm:flex-col max-sm:w-[100%] max-sm:items-center ">
      <div className="homepagetext2 mt-[40px] mb-[-40px]">
        <b className="headingsection2 max-sm:leading-none max-sm:self-center max-sm:w-[100%] max-sm:h-auto heading max-sm:text-center max-sm:text-[32px] text-[72px]">
          Product Features
        </b>
        <b className="paragraphsection2 max-sm:hidden">
          We offer a range of game providers with suitable conditions, plus a
          wide range of other services
        </b>
      </div>
      <div className="button mt-[60px] mb-[-60px] max-sm:hidden">
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
