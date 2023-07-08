import "./NavigationContainer.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/menu.svg"

const NavigationContainer = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [menuRotation, setMenuRotation] = useState(0);
  const toggleMenu = () => {
   
      setMenuOpen(!isMenuOpen);
      setMenuRotation(isMenuOpen ? 0 : -90);
    
  };

  return (
    <div className="navbar max-sm:w-[100%] max-sm:gap-0  max-sm:flex  max-sm:px-2">
      <img className={`logo-icon ${isMenuOpen ? "iconfixed" : " "} max-sm:w-[180px] max-sm:h-auto`} alt="" src="/logo@2x.png" />
      <div className="navitems">
        <div className="flex flex-col w-[30px] h-[20px] justify-center items-center  sm:hidden " >
        <img className={`menu-icon ${isMenuOpen ? "iconfixed " : " "} cursor-pointer z-50`} style={{ transform: `rotate(${menuRotation}deg)` }} alt="" src={menu} onClick={toggleMenu} />
</div>
        <div className="nav-items max-sm:hidden">

          <Link className="Links" to='/'>
          <div className="home">Home</div>
          </Link>
          <Link className="Links" to='/betting'>
          <div className="home">Services</div>
          </Link>
          <Link className="Links"to='/aboutus'>
          <div className="home">Software Solutions</div>
          </Link>
          <Link className="Links" to='/solution'>
          <div className="home">Contact</div>
          </Link>

        </div>
        <Link className="Links max-sm:hidden" to='/casino'>
        <div className="master-primary-button1">
          <b className="home">Get started</b>
        </div>
        </Link>
      </div>
      <div className={`overlay ${isMenuOpen ? "fixed" : "hidden"} w-screen h-screen`}>
  <div className="overlay-items w-screen h-screen flex flex-col">
          <Link className="Links" to="/"  onClick={toggleMenu}>
            <div className="home">Home</div>
          </Link>
          <Link className="Links" to="/betting" onClick={toggleMenu}>
            <div className="home">Services</div>
          </Link>
          <Link className="Links" to="/aboutus"  onClick={toggleMenu}>
            <div className="home">Software Solutions</div>
          </Link>
          <Link className="Links" to="/solution"  onClick={toggleMenu}>
            <div className="home">Contact</div>
          </Link>

        </div>
        <div className="HeaderEllipseBox">
<div className="HeaderEllipse-wrapper">
<div className="HeaderEllipse" />
</div>
</div>
      </div>
    </div>
  );
};

export default NavigationContainer;
