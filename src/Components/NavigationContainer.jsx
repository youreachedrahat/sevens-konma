import "./NavigationContainer.css";
import { Link } from "react-router-dom";
const NavigationContainer = () => {
  return (
    <div className="navbar">
      <img className="logo-icon" alt="" src="/logo@2x.png" />
      <div className="navitems">
        <div className="nav-items">
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
        <Link className="Links" to='/casino'>
        <div className="master-primary-button1">
          <b className="home">Get started</b>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default NavigationContainer;
