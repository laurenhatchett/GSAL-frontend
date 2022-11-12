
import React from 'react'
import "./Hero2Styles.css"
import hero2Background from "../assets/hero2Background.jpeg"
import lifesaver from "../assets/lifesaver.jpg"
// import {Link} from "react-router-dom"

const Hero2Img = () => {
  return (
    
    <div className ="hero">
    <div className="mask">
      <img className="hero2img"
      src={hero2Background} alt="background" /> 
    </div>
    <div className="content">
      <div className="title-container">
        <h1>ABOUT</h1>
        </div>
        <div className="about-img-container">    
                <img className="about-img"src ={lifesaver} alt='about'/>
        </div>
        <div className="about-info-container">
        <p>Kristian was working out at his local gym in Greeley & by fate met Dwight Randolph. Upon meeting, Kristian discovered that Dwight had late stage kidney failure and in urgent need of a lifesaving kidney transplant.</p> 
         <p> In that very moment Kristian offered to get tested. Kristian was in fact a match and he donated his kidney to save Dwight's life. Kristian 
         was so deeply moved by the experience that he has now dedicated his life to finding organ donors through his charity: #GoSaveALife</p>
         </div>
        {/* <div className="hero-btn-container">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdXWz_LOPWMUUyTefH3-3R2u4myBsZyhB9EuPY-UW_kdQVWVw/viewform"
        className="donor-btn">Become A Living Donor </a>
        </div> */}
        
        
    </div>
    </div>
    
  )
}

export default Hero2Img