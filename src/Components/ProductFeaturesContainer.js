import "./ProductFeaturesContainer.css";
const ProductFeaturesContainer = () => {
  return (
    <div className="homepagetop">
      <div className="homepagetext2">
        <b className="headingsection2">Product Features</b>
        <b className="paragraphsection2">
          We offer a range of game providers with suitable conditions, plus a
          wide range of other services
        </b>
      </div>
      <div className="button">
        <div className="buttonhomepage2">
          <b className="button-text6">Get started</b>
          <img
            className="line-roundedarrow-right3"
            alt=""
            src="/line-roundedarrow-right.svg"
          />
        </div>
      </div>
      <img className="gear-icon" alt="" src="/gear@2x.png" />
    </div>
  );
};

export default ProductFeaturesContainer;
