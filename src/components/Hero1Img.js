import React from 'react'
import "./Hero1Styles.css"
import hero1img from "../assets/hero1img.jpeg"
import {Link} from "react-router-dom"

const Hero1Img = () => {
  return (
    
    <div className ="hero">
    <div className="mask">
      <img className="hero1img"
      src={hero1img} alt="intro" /> 
    </div>
    <div className="content">
        <p className='mission-statement'>Go Save a Life is dedicated to helping people who are in need of a kidney transplant find a live donor.</p>
        
        <div className="hero-btn-container">
        <Link to="/public-profiles"
        className="btn btn-light">View Profiles</Link>
        <Link to="/about"
        className="btn btn-light">About Us</Link>
        </div>
        <div className="donor-btn-container">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdXWz_LOPWMUUyTefH3-3R2u4myBsZyhB9EuPY-UW_kdQVWVw/viewform"
        className="donor-btn">Become A Living Donor </a>
        </div>
    </div>
    </div>
    
  )
}

export default Hero1Img
