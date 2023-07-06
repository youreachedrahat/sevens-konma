import {
  Routes,
  Route} from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Betting from "./Pages/Betting/Betting";
import Casino from "./Pages/Casino/Casino";
import Solution from "./Pages/Solutions/Solution";

// mobile
import HeaderMobile from "./Pages/Header/HeaderMobile/HeaderMobile";
import CasinoMobile from "./Pages/Casino/CasinoMobile/CasinoMobile";
import BettingMobile from "./Pages/Solutions/MobileView/BettingMobile";
import SportMobile from "./Pages/Betting/SportsMobile/Sports";
import AboutMobile from "./Pages/Aboutus/AboutusMobile/AboutMobile";

function App() {
  return (
    <>
    {/* <HeaderMobile/> */}
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/am" element={<AboutMobile />} />
      
      <Route path="/betting" element={<Betting />} />
      <Route path="/sm" element={<SportMobile />} />

      <Route path="/casino" element={<Casino />} />
      <Route path="/cm" element={<CasinoMobile />} />

      <Route path="/solution" element={<Solution />} />
      <Route path="/bm" element={<BettingMobile />} />

    </Routes>
    </>
  );
}
export default App;
