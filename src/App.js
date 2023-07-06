import {
  Routes,
  Route} from "react-router-dom";
  import { useMediaQuery } from 'react-responsive';

import Header2 from "./Pages/Header/Header2";
import Homepage from "./Pages/Homepage/Homepage";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Betting from "./Pages/Betting/Betting";
import Casino from "./Pages/Casino/Casino";
import Solution from "./Pages/Solutions/Solution";
import Footer from "./Pages/Footer/Footer";

// mobile
import HeaderMobile from "./Pages/Header/HeaderMobile/HeaderMobile";
import CasinoMobile from "./Pages/Casino/CasinoMobile/CasinoMobile";
import BettingMobile from "./Pages/Solutions/MobileView/BettingMobile";
import SportMobile from "./Pages/Betting/SportsMobile/Sports";
import AboutMobile from "./Pages/Aboutus/AboutusMobile/AboutMobile";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 500 });

  return (
    <>
    {!isMobile && <Header2 />}
    {isMobile && <HeaderMobile />}
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
    <Footer/>
    </>
  );
}
export default App;
