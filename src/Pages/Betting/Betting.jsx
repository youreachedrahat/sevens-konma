import React from "react";
import { useMediaQuery } from "react-responsive";

import Header2 from "../Header/Header2";
import Footer from "../Footer/Footer";
import BettingSection1 from "./BettingSection1";
import BettingSection2 from "./BettingSection2";
import BettingSection3 from "./BettingSection3";
import Bettingsection4 from "./Bettingsection4";
import HorizontalRule from "../../Components/HorizontalRule";

function Betting() {
  const isMobile = useMediaQuery({ maxWidth: 500 });

  return (
    <>
      {/* <Header2/> */}
      <BettingSection1 />
      <HorizontalRule />
      <BettingSection2 />
      {!isMobile && <HorizontalRule />}
      {!isMobile && <BettingSection3 />}
      <HorizontalRule />
      <Bettingsection4 />
      {/* <Footer/> */}
    </>
  );
}

export default Betting;
