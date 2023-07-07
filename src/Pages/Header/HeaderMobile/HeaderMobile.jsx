import "./HeaderMobile.css";
import logo from "../../../assets/logomobile.png"
import menu from "../../../assets/menu.svg"
const HeaderMobile = () => {
  return (
    <div className="headermobile">
      <div className="parent">
        <img className="icon" alt="" src={logo} />
        <img className="menu-icon" alt="" src={menu} />
      </div>
      <div className="container" />
    </div>
  );
};

export default HeaderMobile;
