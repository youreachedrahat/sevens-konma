import "./HomepageSection4.css";
import users from "../../assets/vector.png"
import money from "../../assets/money.gif"
const HomepageSection4 = () => {
  return (
    <div className="homepagesection4 max-sm:w-full max-sm:p-0 max-sm:pt-10">
      <div className="homepage4body max-sm:w-full">
        <b className=" headingwhite max-sm:hidden">Our Clients</b>
        <div className="body4 max-sm:flex-col-reverse max-sm:gap-20 max-sm:pb-10">
          <div className="clientslogo max-sm:grid max-sm:grid-cols-2 max-sm:gap-y-12 max-sm:gap-x-12 max-sm:w-[95%]">
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
         

          <div className="body4right max-sm:w-full">
            <img
              className="homepageimage4-icon max-sm:self-center"
              alt=""
              src={money}
            />
        <div className="sm:hidden text-[54px] headingwhite max-sm:w-full max-sm:self-center max-sm:text-center max-sm:font-bold">Our Clients</div>

            <div className="tagline max-sm:text-center max-sm:leading-6 max-sm:text-[24px] max-sm:w-[80%] max-sm:mx-auto">why sevens gaming?</div>
            <div className="text max-sm:text-center max-sm:px-4 max-sm:w-full max-sm:text-[16px]">
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
