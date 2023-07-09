import "./CasinoSection3.css";
import casinoimage2 from "../../assets/casinoImage2.gif";
const CasinoSection3 = () => {
  return (
    <div className='casinosection3 px-20'>
      <div className='flex justify-center items-start flex-col'>
        <b className=' max-sm:h-auto max-sm:mx-auto max-sm:text-center max-sm:top-0 sm:text-[44px] max-sm:text-[32px]'>
          Our Commitment to Security
        </b>
        <div className='flex flex-col-reverse lg:flex-row items-start'>
          <div className='lg:mt-12 w-full leading-10 mt-12'>
            We take the security of our players very seriously, and we use the
            latest encryption and security technologies to ensure that our
            platform is safe and secure. Our live casino games are fair and
            transparent, and we are committed to providing a responsible gaming
            environment for our players. We also have a team of dedicated
            professionals who monitor our platform 24/7 to ensure that our
            players have a safe and enjoyable gaming experience.
          </div>
          <div className='justify-center items-center flex w-full'>
            <img className='' alt='' src={casinoimage2} />
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default CasinoSection3;
