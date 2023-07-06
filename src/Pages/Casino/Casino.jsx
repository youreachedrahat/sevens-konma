import React from 'react'
import Header2 from '../Header/Header2'
import Footer from '../Footer/Footer'
import CasinoSection1 from './CasinoSection1'
import CasinoSection2 from './CasinoSection2'
import CasinoSection3 from './CasinoSection3'
import CasinoSection4 from './CasinoSection4'
import HorizontalRule from "../../Components/HorizontalRule"

function Casino() {
  return (
    <>
    <Header2/>
    <CasinoSection1/>
    <HorizontalRule/>
    <CasinoSection2/>      
    <HorizontalRule/>
    <CasinoSection3/>      
    <HorizontalRule/>
    <CasinoSection4/>
    <Footer/>
    </>
  )
}

export default Casino