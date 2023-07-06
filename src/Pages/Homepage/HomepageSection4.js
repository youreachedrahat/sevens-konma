import "./HomepageSection4.css";
import users from "../../assets/vector.png"
const HomepageSection4 = () => {
  return (
    <div className="homepagesection4">
      <div className="homepage4body">
        <b className="headingwhite">Our Clients</b>
        <div className="body4">
          <div className="clientslogo">
            <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
            <img className="mask-group-icon" alt="" src="/mask-group1@2x.png" />
            <img className="mask-group-icon" alt="" src="/mask-group2@2x.png" />
            <img className="mask-group-icon" alt="" src="/mask-group3@2x.png" />
            <img className="mask-group-icon" alt="" src="/mask-group4@2x.png" />
            <img className="mask-group-icon" alt="" src="/mask-group5@2x.png" />
            <img className="mask-group-icon" alt="" src="/mask-group6@2x.png" />
            <img className="mask-group-icon" alt="" src="/mask-group7@2x.png" />
            <img
              className="mask-group-icon8"
              alt=""
              src="/mask-group8@2x.png"
            />
            <img className="mask-group-icon" alt="" src="/mask-group9@2x.png" />
          </div>
          <div className="body4right">
            <img
              className="homepageimage4-icon"
              alt=""
              src="/homepageimage4@2x.png"
            />
            <div className="tagline">why sevens gaming?</div>
            <div className="text">
              <span>{`With 6+ years of experience under our belt and 40+ Active White Labels, we are the leading
provider of the `}</span>
              <b>iGaming market</b>
            </div>
          </div>
        </div>
      </div>
      <img className="users-icon" alt="" src={users} />
    </div>
  );
};

export default HomepageSection4;
