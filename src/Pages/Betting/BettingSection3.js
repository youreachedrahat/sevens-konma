import "./BettingSection3.css";
const BettingSection3 = () => {
  return (
    <div className="bettingsection3 max-sm:w-auto max-sm:h-auto max-sm:flex-col max-sm:px-0 max-sm:py-0">
      <div className="bettingsection3body max-sm:w-auto max-sm:h-auto max-sm:px-0 sm:pl-20">
        <div className="bettingsection3text">
          <span>{`Also we are pride ourselves on our `}</span>
          <b>24x7 customer service</b>
          <span>{`. We understand that your success is our success, which is why we are dedicated to providing you with the best possible service and support. Our team is always available to answer your questions, provide guidance, and help you to resolve any issues that you may encounter. `}</span>
        </div>
        <img
          className="bettingimage2-icon"
          alt=""
          src="/bettingimage2@2x.png"
        />
      </div>
    </div>
  );
};

export default BettingSection3;
