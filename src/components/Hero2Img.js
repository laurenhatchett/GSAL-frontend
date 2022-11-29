
import React from 'react'
import "./Hero2Styles.css"
import hero2Background from "../assets/hero2Background.jpeg"
import lifesaver from "../assets/lifesaver.jpg"


function Hero2Img() {

  return (
    
        <div className ="hero-2">
        <div className="mask-2">
          <img className="hero2img"
          src={hero2Background} alt="background" /> 
        </div>
        <div className="about-content-1">
          <div className="title-container-1">
            <h1 className="backstory">BACKSTORY</h1>
         </div>
        <div className="content-container">

            <div className="about-img-container">    
                    <img className="about-img"src ={lifesaver} alt='about'/>
            </div>
            <div className="about-info-container">
            <p className="hero2-p">Kristian was working out at his local gym in Greeley & by fate met Dwight Randolph. Upon meeting, Kristian discovered that Dwight had late stage kidney failure and in urgent need of a lifesaving kidney transplant. 
          In that very moment Kristian offered to get tested. Kristian was in fact a match and he donated his kidney to save Dwight's life. Kristian 
          was so deeply moved by the experience that he has now dedicated his life to finding organ donors through his charity: #GoSaveALife</p>

            </div>
          </div>

          </div>
          </div>
       )}

          export default Hero2Img

      