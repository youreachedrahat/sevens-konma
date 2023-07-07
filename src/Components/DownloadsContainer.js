import "./DownloadsContainer.css";
const DownloadsContainer = () => {
  return (
    <div className="footerupper max-sm:flex-col max-sm:h-auto max-sm:w-full max-sm:gap-12">
      <div className="footerleft max-sm:w-full max-sm:pt-10">
        <img className="logo-icon1 max-sm:w-[180px] max-sm:object-contain" alt="" src="/logo11@2x.png" />
        <div className="footer-description max-sm:text-[16px] max-sm:pb-10 max-sm:w-full">
          {" "}
          Sports Exchange/ Bookmaker/ Casino
        </div>
        <div className="sociallinks max-sm:w-full">
          <img
            className="social-media-icon-squarefaceb max-sm:w-[36px] max-sm:h-[36px]"
            alt=""
            src="/social-media-icon-squarefacebook@2x.png"
          />
          <img
            className="social-media-icon-squarefaceb max-sm:w-[36px] max-sm:h-[36px]"
            alt=""
            src="/social-media-icon-squaretwitter@2x.png"
          />
          <img
            className="social-media-icon-squarefaceb max-sm:w-[36px] max-sm:h-[36px]"
            alt=""
            src="/social-media-icon-squareinstagram@2x.png"
          />
          <img
            className="social-media-icon-squarefaceb max-sm:w-[36px] max-sm:h-[36px]"
            alt=""
            src="/social-media-icon-squarelinkedin@2x.png"
          />
          <img
            className="social-media-icon-squarefaceb max-sm:w-[36px] max-sm:h-[36px]"
            alt=""
            src="/social-media-icon-squareyoutube@2x.png"
          />
        </div>
      </div>
      <div className="footerlinks max-sm:w-full  max-sm:grid max-sm:grid-cols-2 max-sm:p-5 max-sm:gap-y-9 max-sm:gap-x-0 ">
        <div className="col1 max-sm:gap-y-6">
          <b className="footer-title max-sm:text-[20px]">Product</b>
          <div className="link-parent max-sm:gap-y-5">
            <div className="link">
              <div className="features max-sm:text-[18px]">Features </div>
            </div>
            <div className="link">
              <div className="features max-sm:text-[18px]">Pricing</div>
            </div>
            <div className="link">
              <div className="features max-sm:text-[18px]">Case studies</div>
            </div>
            <div className="link">
              <div className="features max-sm:text-[18px]">Reviews</div>
            </div>
            <div className="link">
              <div className="features max-sm:text-[18px]">Updates</div>
            </div>
          </div>
        </div>
        <div className="col1 max-sm:gap-y-6 max-sm:mx-auto">
          <b className="footer-title max-sm:text-[20px]1">Company</b>
          <div className="link-parent max-sm:gap-y-5">
            <div className="link">
              <div className="features max-sm:text-[18px]">About</div>
            </div>
            <div className="link">
              <div className="features max-sm:text-[18px]">Contact us</div>
            </div>
            <div className="link">
              <div className="features max-sm:text-[18px]">Careers</div>
            </div>
            <div className="link">
              <div className="features max-sm:text-[18px]">Culture</div>
            </div>
            <div className="link">
              <div className="features max-sm:text-[18px]">Blog</div>
            </div>
          </div>
        </div>
        <div className="col1 max-sm:gap-y-6">
          <b className="footer-title max-sm:text-[20px]">Support</b>
          <div className="link-parent max-sm:gap-y-5">
            <div className="link">
              <div className="features max-sm:text-[16px]">Getting started</div>
            </div>
            <div className="link">
              <div className="features max-sm:text-[18px]">Help center</div>
            </div>
            <div className="link">
              <div className="features max-sm:text-[18px]">Server status</div>
            </div>
            <div className="link">
              <div className="features max-sm:text-[18px]">Report a bug</div>
            </div>
            <div className="link">
              <div className="features max-sm:text-[18px]">Chat support</div>
            </div>
          </div>
        </div>
        <div className="col1 max-sm:gap-y-6 max-sm:mx-auto">
          <b className="footer-title max-sm:text-[20px]3">Downloads</b>
          <div className="link-parent max-sm:gap-y-5">
            <div className="link">
              <div className="features max-sm:text-[18px]">iOS</div>
            </div>
            <div className="link">
              <div className="features max-sm:text-[18px]">Android</div>
            </div>
            <div className="link">
              <div className="features max-sm:text-[18px]">Mac</div>
            </div>
            <div className="link">
              <div className="features max-sm:text-[18px]">Windows</div>
            </div>
            <div className="link">
              <div className="features max-sm:text-[18px]">Chrome</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadsContainer;
