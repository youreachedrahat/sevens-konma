import "./BettingSection3.css";

const BettingSection3 = () => {
  return (
    //  <div className="bettingsection2">
    //   <div className="flex flex-col lg:flex-row items-start px-20 py-5 max-sm:px-5 max-sm:text-[16px]">
    //     <div className="lg:mt-12 w-full leading-10 mt-12">
    //       One of the key benefits of working with us is that we can help you to
    //       increase your revenue by providing you with the tools you need to
    //       attract and retain customers. We can help you to create a seamless
    //       user experience that encourages customers to keep coming back, and we
    //       can also help you to implement promotions, bonuses, and other
    //       incentives to keep your customers engaged.
    //     </div>
    //     <div className="justify-center items-center flex w-full">
    //       <img className="frame-icon lg:mt-8" alt="" src="/frame@2x.png" />
    //     </div>
    //   </div>
    // </div>
    <div className="bettingsection3 max-sm:bg-white max-sm:text-textColor">
      <div className="flex flex-col lg:flex-row items-start px-20 sm:py-5 max-sm:pb-5 max-sm:px-5 max-sm:text-[16px]">
        <div className="lg:mt-12 w-full leading-10 mt-12">
          Also we are pride ourselves on our
          <span className="sm:font-bold"> 24x7 customer service</span>. We understand that your success is our
          success, which is why we are dedicated to providing you with the best
          possible service and support. Our team is always available to answer
          your questions, provide guidance, and help you to resolve any issues
          that you may encounter.
        </div>
        <div>
          <img
            className="justify-center items-center flex w-full pt-8 max-sm:hidden"
            alt=""
            src="/bettingimage2@2x.png"
          />

<img
            className="justify-center items-center flex w-full pt-8 sm:hidden"
            alt=""
            src="/support.gif"
          />
        </div>
      </div>
    </div>
  );
};

export default BettingSection3;
