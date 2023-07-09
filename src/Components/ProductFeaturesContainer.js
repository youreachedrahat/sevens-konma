import "./ProductFeaturesContainer.css";
const ProductFeaturesContainer = () => {
  return (
    <div className="homepagetop max-[830px]:flex-col max-sm:w-[100%] max-sm:items-center max-lg:gap-0 ">
      <div className="homepagetext2 mt-[40px]">
        <b className="headingsection2 max-sm:leading-none max-sm:self-center max-sm:w-[100%] max-sm:h-auto heading max-sm:text-center max-sm:text-[32px] text-[72px]">
          Product Features
        </b>
        <b className="paragraphsection2 max-sm:hidden">
          We offer a range of game providers with suitable conditions, plus a
          wide range of other services
        </b>
      </div>
      <div className="button lg:mt-[60px] max-sm:hidden">
        <div className="buttonhomepage2">
          <b className="button-text6 text-center">Get started</b>
          <img
            className="line-roundedarrow-right3"
            alt=""
            src="/line-roundedarrow-right.svg"
          />
        </div>
      </div>
      <img className="gear-icon absolute z-10 max-sm:ml-[-100%] max-sm:mt-[35%] max-sm:w-[160px] max-sm:object-contain right-[-8%] top-0 max-lg:right-[-13%] max-[830px]:right-[-17%]" alt="" src="/gear@2x.png" />
    </div>
  );
};

export default ProductFeaturesContainer;
