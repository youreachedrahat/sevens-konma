import React from "react";


import BettingSection1 from "./BettingSection1";
import BettingSection2 from "./BettingSection2";
import BettingSection3 from "./BettingSection3";
import Bettingsection4 from "./Bettingsection4";
import HorizontalRule from "../../Components/HorizontalRule";

function Betting() {

  return (
    <>
      <BettingSection1 />
      <HorizontalRule />
      <BettingSection2 />
      <HorizontalRule />
      <BettingSection3 />
      <HorizontalRule />
      <Bettingsection4 />
    </>
  );
}

export default Betting;
