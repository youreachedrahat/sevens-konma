import React from 'react'
import Header2 from '../Header/Header2'
import Footer from '../Footer/Footer'
import HomepageSection1 from './HomepageSection1'
import HomepageSection2 from './HomepageSection2'
import HomepageSection3 from './HomepageSection3'
import HomepageSection4 from './HomepageSection4'
import Faqs from "./Faqs.js";
import HorizontalRule from "../../Components/HorizontalRule"
function Homepage() {
  return (
    <>
    <Header2/>
    <HomepageSection1/>
    <HorizontalRule/>
    <HomepageSection2/>
    <HorizontalRule/>
    <HomepageSection3/>
    <HorizontalRule/>
    <HomepageSection4/>
    <HorizontalRule/>
    <Faqs/>
    <Footer/>
    </>
  )
}

export default Homepage