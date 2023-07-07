import "./NavigationContainer.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/menu.svg"

const NavigationContainer = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar max-sm:w-[100%] max-sm:gap-0  max-sm:flex  max-sm:px-2">
      <img className="logo-icon max-sm:w-[250px] max-sm:h-auto" alt="" src="/logo@2x.png" />
      <div className="navitems">
        <div className="flex flex-col w-[30px] h-[20px] justify-center items-center  sm:hidden " >
        <img className="menu-icon cursor-pointer" alt="" src={menu} onClick={toggleMenu} />
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
      <div className={`overlay ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="overlay-items flex flex-col justify-center items-center">
          <Link className="Links" to="/">
            <div className="home">Home</div>
          </Link>
          <Link className="Links" to="/betting">
            <div className="home">Services</div>
          </Link>
          <Link className="Links" to="/aboutus">
            <div className="home">Software Solutions</div>
          </Link>
          <Link className="Links" to="/solution">
            <div className="home">Contact</div>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default NavigationContainer;
