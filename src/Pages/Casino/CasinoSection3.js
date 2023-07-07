import "./CasinoSection3.css";
const CasinoSection3 = () => {
  return (
    <div className="casinosection3 max-sm:px-0 max-sm:w-auto max-sm:h-auto max-sm:flex-col max-sm:py-0 max-sm: ">
      <div className="casinosection-3">
        <div className="casinobody3  max-sm:w-auto max-sm:h-auto max-sm:flex-col max-sm:px-0 max-sm:mx-0 max-sm:gap-y-0 max-sm:items-center">
          <div className="textwhite3 max-sm:w-auto max-sm:h-auto max-sm:pt-28 max-sm:text-center max-sm:px-5">{`We take the security of our players very seriously, and we use the latest encryption and security technologies to ensure that our platform is safe and secure. Our live casino games are fair and transparent, and we are committed to providing a responsible gaming environment for our players. We also have a team of dedicated professionals who monitor our platform 24/7 to ensure that our players have a safe and enjoyable gaming experience. `}</div>
          <img
            className="casinoimage2-icon max-sm:left-0 max-sm:w-auto max-sm:h-auto max-sm:object-cover"
            alt=""
            src="/casinoimage2@2x.png"
          />
        </div>
        <b className="title2 max-sm:w-auto max-sm:h-auto max-sm:pt-5 max-sm:text-center max-sm:top-0 max-sm:">{`Our Commitment to Security `}</b>
      </div>
    </div>
  );
};

export default CasinoSection3;
