import "./FrameComponent.css";
import HorizontalRule from "../../Components/HorizontalRule";
const FrameComponent = () => {
  return (
    <div className="section-1">
      <div className="section-11">
        <div className="aboutusTop">
          <div className="rectangle max-sm:p-0 max-sm:bg-[#fec811] max-sm:h-[120px] ">
            <b className="title max-sm:h-auto max-sm:text-[32px] max-sm:text-center max-sm:leading-7 max-sm:text-textColor max-sm:mx-auto lg:px-5">About Us</b>
          </div>
          <HorizontalRule />
        </div>
        <div className="as-a-brand max-sm:w-auto max-sm:h-auto max-sm:px-5 max-sm:text-[16px] sm:text-[24px] max-sm:leading-7 sm:w-auto sm:h-auto sm:px-20">
          As a brand, Sevens Gaming has a legacy in the sports exchange
          industry. We are the most trusted White Label providers of Sports
          Exchange platform operating since 2016. More than 40 top White Labels
          active in the industry rely on us for our services. We source data
          from the world’s leading sports data providers such as Betfair,
          Evolution and many more. Over the years, we have successfully created
          feature-rich betting exchange platforms for numerous white labels.
          Based on the business needs, we carefully assess and provide all the
          necessary integrations, features and customizations leading to a very
          user-friendly betting exchange platform. To know further about our
          best-in-class services and why Sevens is the biggest name in this
          industry, get in touch with us today!
        </div>
        <br />
      </div>
    </div>
  );
};

export default FrameComponent;
