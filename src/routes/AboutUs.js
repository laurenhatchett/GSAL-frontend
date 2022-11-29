import "./AboutUsStyles.css"
import React from 'react'
import Hero2Img from "../components/Hero2Img"
import Navbar1 from '../components/Navbar1'
import WhatWeDo from "../components/WhatWeDo"
const AboutUs = () => {
  return (
    <div>
    <Navbar1/>
      <Hero2Img/>
      <WhatWeDo/>
    </div>
  )
}

export default AboutUs
