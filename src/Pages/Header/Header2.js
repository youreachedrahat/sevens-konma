import NavigationContainer from "../../Components/NavigationContainer";
import "./Header2.css";
const Header2 = () => {
  return (
    <div className="header-2 max-sm:w-[100%] ">
      <div className="header max-sm:w-[100%] max-sm:gap-2 ">
        <NavigationContainer />
        <div className="containerHeader z-10" />
      </div>
    </div>
  );
};

export default Header2;
