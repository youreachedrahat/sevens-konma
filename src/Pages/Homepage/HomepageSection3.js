import "./HomepageSection3.css";
const HomepageSection3 = () => {
  return (
    <div className="homepagesection3 max-sm:p-2 max-sm:py-10">
      <div className="homepagesection-3 max-sm:w-full max-sm:gap-[51px]">
        <div className="homepage-3text">
          <b className="headingindigo max-sm:leading-normal textsmall2 max-sm:w-full max-sm:tracking-tight sm:uppercase ">
            Top Game Providers under a single intergration
          </b>
          <div className="max-sm:hidden paragraph">
            We are sourcing data from the world’s leading sports data providers
            which helps us in creating the best sports exchange or casino
            platform for you
          </div>
        </div>
        <div className="max-sm:grid max-sm:grid-cols-2 max-sm:gap-y-7 max-sm:gap-x-auto max-sm:w-full homepage-3logos max-sm:pb-3">
          <img className="max-sm:w-40 max-sm:h-auto logo1-icon" alt="" src="/logo1@2x.png" />
          <img className="max-sm:w-40 max-sm:h-auto logo1-icon" alt="" src="/logo3@2x.png" />
          <img className="max-sm:w-40 max-sm:h-auto logo1-icon" alt="" src="/logo4@2x.png" />
          <img className="max-sm:w-40 max-sm:h-auto logo1-icon" alt="" src="/logo2@2x.png" />
          <img className="max-sm:w-40 max-sm:h-auto logo1-icon" alt="" src="/logo5@2x.png" />
          <img className="max-sm:w-40 max-sm:h-auto logo1-icon" alt="" src="/logo6@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default HomepageSection3;
