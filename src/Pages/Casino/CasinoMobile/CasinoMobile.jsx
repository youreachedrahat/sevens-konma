import React from 'react'
import CasinoMobile1 from './CasinoMobile1';
import CasinoMobile2 from './CasinoMobile2';
import CasinoMobile3 from './CasinoMobile3';
import CasinoMobile4 from './CasinoMobile4'
import HorizontalRule from "../../../Components/HorizontalRule"

function CasinoMobile() {
  return (
    <>
    {/* <Header2/> */}
    <CasinoMobile1/>
    <HorizontalRule/>
    <CasinoMobile2/>      
    <HorizontalRule/>
    <CasinoMobile3/>      
    <HorizontalRule/>
    <CasinoMobile4/>
    {/* <Footer/> */}
    </>
  )
}

export default CasinoMobile