import "./HomepageSection4.css";
import users from "../../assets/vector.png"
import money from "../../assets/money.gif"
const HomepageSection4 = () => {
  return (
    <div className="homepagesection4 w-[100%] max-sm:p-0 max-sm:pt-10">
        <b className=" headingwhite max-sm:hidden max-lg:mx-auto w-[100%] max-lg:text-center">Our Clients</b>
      <div className="homepage4body max-sm:w-full">
        <div className="body4 justify-between w-[100%] max-lg:flex-col-reverse max-sm:gap-20 max-sm:pb-10">
          
          <div className="clientslogo w-[50%] max-sm:grid max-sm:grid-cols-2 max-sm:gap-y-12 max-sm:gap-x-12 max-lg:w-[95%] max-lg:place-items-center ml-0 mt-5">
            <img className="mask-group-icon " alt="" src="/mask-group@2x.png" />
            <img className="mask-group-icon max-sm:ml-auto" alt="" src="/mask-group1@2x.png" />
            <img className="mask-group-icon" alt="" src="/mask-group2@2x.png" />
            <img className="mask-group-icon max-sm:ml-auto" alt="" src="/mask-group3@2x.png" />
            <img className="mask-group-icon" alt="" src="/mask-group4@2x.png" />
            <img className="mask-group-icon max-sm:ml-auto" alt="" src="/mask-group5@2x.png" />
            <img className="mask-group-icon" alt="" src="/mask-group6@2x.png" />
            <img className="mask-group-icon max-sm:ml-auto" alt="" src="/mask-group7@2x.png" />
            <img
              className="mask-group-icon8"
              alt=""
              src="/mask-group8@2x.png"
            />
            <img className="mask-group-icon max-sm:ml-auto" alt="" src="/mask-group9@2x.png" />
          </div>

          <div className="body4right w-[30%] max-lg:w-[90%] mx-auto max-sm:w-full max-sm:gap-2">
            <img
              className="homepageimage4-icon max-sm:self-center mx-auto"
              alt=""
              src={money}
            />
        <div className="sm:hidden  headingwhite max-sm:w-full max-sm:self-center max-sm:text-center max-sm:font-bold text-[32px]">Our Clients</div>

            <div className="tagline max-sm:text-center max-sm:leading-6 max-sm:text-[24px] max-sm:w-[100%] max-lg:mx-auto">why sevens gaming?</div>
            <div className="text mx-auto max-sm:text-center max-sm:px-4 w-full max-sm:text-[16px] max-sm:mx-0 max-sm:leading-8 mb-5">
              <span>With 6+ years of experience under our belt and 40+ Active White Labels, we are the leading
provider of the </span>
              <b>iGaming market</b>
            </div>
          </div>

        </div>
      </div>
      <img className="users-icon max-sm:h-auto" alt="" src={users} />
    </div>
  );
};

export default HomepageSection4;
