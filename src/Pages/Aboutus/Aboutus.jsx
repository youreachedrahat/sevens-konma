import React from "react";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import FrameComponent from "./FrameComponent";
import HorizontalRule from "../../Components/HorizontalRule";

function Aboutus() {
  return (
    <>
      {/* <Header2 /> */}
      <FrameComponent />
      <HorizontalRule />
      <Section2 />
      <HorizontalRule />
      <Section3 />
      <HorizontalRule />
      <Section4 />
      {/* <Footer /> */}
    </>
  );
}

export default Aboutus;
