import "./DownloadsContainer.css";
const DownloadsContainer = () => {
  return (
    <div className="footerupper">
      <div className="footerleft">
        <img className="logo-icon1" alt="" src="/logo11@2x.png" />
        <div className="footer-description">
          {" "}
          Sports Exchange/ Bookmaker/ Casino
        </div>
        <div className="sociallinks">
          <img
            className="social-media-icon-squarefaceb"
            alt=""
            src="/social-media-icon-squarefacebook@2x.png"
          />
          <img
            className="social-media-icon-squarefaceb"
            alt=""
            src="/social-media-icon-squaretwitter@2x.png"
          />
          <img
            className="social-media-icon-squarefaceb"
            alt=""
            src="/social-media-icon-squareinstagram@2x.png"
          />
          <img
            className="social-media-icon-squarefaceb"
            alt=""
            src="/social-media-icon-squarelinkedin@2x.png"
          />
          <img
            className="social-media-icon-squarefaceb"
            alt=""
            src="/social-media-icon-squareyoutube@2x.png"
          />
        </div>
      </div>
      <div className="footerlinks">
        <div className="col1">
          <b className="footer-title">Product</b>
          <div className="link-parent">
            <div className="link">
              <div className="features">Features</div>
            </div>
            <div className="link">
              <div className="features">Pricing</div>
            </div>
            <div className="link">
              <div className="features">Case studies</div>
            </div>
            <div className="link">
              <div className="features">Reviews</div>
            </div>
            <div className="link">
              <div className="features">Updates</div>
            </div>
          </div>
        </div>
        <div className="col1">
          <b className="footer-title1">Company</b>
          <div className="link-parent">
            <div className="link">
              <div className="features">About</div>
            </div>
            <div className="link">
              <div className="features">Contact us</div>
            </div>
            <div className="link">
              <div className="features">Careers</div>
            </div>
            <div className="link">
              <div className="features">Culture</div>
            </div>
            <div className="link">
              <div className="features">Blog</div>
            </div>
          </div>
        </div>
        <div className="col1">
          <b className="footer-title2">Support</b>
          <div className="link-parent">
            <div className="link">
              <div className="features">Getting started</div>
            </div>
            <div className="link">
              <div className="features">Help center</div>
            </div>
            <div className="link">
              <div className="features">Server status</div>
            </div>
            <div className="link">
              <div className="features">Report a bug</div>
            </div>
            <div className="link">
              <div className="features">Chat support</div>
            </div>
          </div>
        </div>
        <div className="col1">
          <b className="footer-title3">Downloads</b>
          <div className="link-parent">
            <div className="link">
              <div className="features">iOS</div>
            </div>
            <div className="link">
              <div className="features">Android</div>
            </div>
            <div className="link">
              <div className="features">Mac</div>
            </div>
            <div className="link">
              <div className="features">Windows</div>
            </div>
            <div className="link">
              <div className="features">Chrome</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadsContainer;
