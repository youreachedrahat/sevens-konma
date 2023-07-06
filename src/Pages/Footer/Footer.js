import DownloadsContainer from "../../Components/DownloadsContainer";
import "./Footer.css";
import HorizontalRule from "../../Components/HorizontalRule"

const Footer = () => {
  return (
    <>
    <HorizontalRule/>
    <div className="footer">
      <div className="footerbody">
        <DownloadsContainer />
        <div className="copyrightwrapper">
          <div className="container2" />
          <div className="wrapper">
            <div className="copyright">{`Copyright © 2023 Sevens Gaming | All Rights Reserved `}</div>
          </div>
        </div>
      </div>
    </div>
    <HorizontalRule/>
    </>
  );
};

export default Footer;
