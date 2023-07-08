import "./CasinoSection3.css";
import casinoimage2 from "../../assets/casinoImage2.gif";
const CasinoSection3 = () => {
  return (
    <div className="casinosection3 max-sm:px-0 max-sm:w-auto max-sm:h-auto max-sm:flex-col max-sm:py-0 max-sm: ">
      <div className="casinosection-3 max-sm:pt-10">
        <b className=" max-sm:w-[70%] max-sm:h-auto  max-sm:mx-auto max-sm:text-center max-sm:top-0 sm:text-[54px] max-sm:text-[32px] sm:ml-[-40px]">
          Our Commitment to Security
        </b>
        <div className="casinobody3  max-sm:w-auto max-sm:h-auto max-sm:flex-col-reverse max-sm:px-0 max-sm:mx-0 max-sm:gap-y-0 max-sm:items-center sm:items-start ">
          <div className="textwhite3 max-sm:w-[100%] max-sm:h-auto  text-justify max-sm:px-5 text-[24px] max-sm:text-[16px] leading-8">
            We take the security of our players very seriously, and we use the
            latest encryption and security technologies to ensure that our
            platform is safe and secure. Our live casino games are fair and
            transparent, and we are committed to providing a responsible gaming
            environment for our players. We also have a team of dedicated
            professionals who monitor our platform 24/7 to ensure that our
            players have a safe and enjoyable gaming experience.
          </div>
          <img
            className="casinoimage2-icon max-sm:left-0 max-sm:w-auto max-sm:h-auto max-sm:object-cover"
            alt=""
            src={casinoimage2}
          />
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default CasinoSection3;
