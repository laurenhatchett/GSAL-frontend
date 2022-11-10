
import React from 'react'
import "./Hero2ImgStyles.css"
import hero2Background from "../assets/hero2Background.jpeg"
// import {Link} from "react-router-dom"

const Hero2Img = () => {
  return (
    
    <div className ="hero">
    <div className="mask">
      <img className="hero1img"
      src={hero2Background} alt="background" /> 
    </div>
    <div className="content">
        <p>How it started</p>
        
        <div className="hero-btn-container">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdXWz_LOPWMUUyTefH3-3R2u4myBsZyhB9EuPY-UW_kdQVWVw/viewform"
        className="donor-btn">Become A Living Donor </a>
        </div>
        
        
    </div>
    </div>
    
  )
}

export default Hero2Img