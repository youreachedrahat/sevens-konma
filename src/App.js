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


      {!isMobile && <Route path="/aboutus" element={<Aboutus />} />}
    {isMobile &&  <Route path="/aboutus" element={<AboutMobile />} />}
      
     
    {!isMobile && <Route path="/betting" element={<Betting />} />}
    {isMobile && <Route path="/betting" element={<SportMobile />} />}
      
      
      {!isMobile &&  <Route path="/casino" element={<Casino />} />}
    {isMobile &&  <Route path="/casino" element={<CasinoMobile />} />}
     
     
      {!isMobile && <Route path="/solution" element={<Solution />} />}
    {isMobile && <Route path="/solution" element={<BettingMobile />} />}
      
      

    </Routes>
    <Footer/>
    </>
  );
}
export default App;
