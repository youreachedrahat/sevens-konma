import DownloadsContainer from "../../Components/DownloadsContainer";
import "./Footer.css";
import HorizontalRule from "../../Components/HorizontalRule"

const Footer = () => {
  return (
    <>
      <HorizontalRule />
      <div className="footer max-sm:w-full max-sm:h-auto">
        <div className="footerbody max-sm:w-full">
          <DownloadsContainer />
          <div className="copyrightwrapper max-sm:w-full">
            <div className="container2" />
            <div className="wrapper max-sm:w-full max-sm:px-5">
              <div className="copyright max-sm:hidden">Copyright © 2023 Sevens Gaming | All Rights Reserved</div>
              <div className="copyright sm:hidden max-sm:text-white max-sm:text-[16px] max-sm:w-full max-sm:p-0">Copyright © 2023 Sevens Gaming |
                <br />| All Rights Reserved |<br />
                Terms and Conditions | Privacy Policy</div>
            </div>
          </div>
        </div>
      </div>
      <HorizontalRule />
    </>
  );
};

export default Footer;
