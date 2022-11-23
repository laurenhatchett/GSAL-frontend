
import React from 'react'
import "./Hero2Styles.css"
// import hero2Background from "../assets/hero2Background.jpeg"
import lifesaver from "../assets/lifesaver.jpg"
import fashion from "../assets/fashion.jpeg"
import awareness from "../assets/awareness.jpeg"
// import {Link} from "react-router-dom"
import {Carousel} from 'react-bootstrap';

function Hero2Img() {

    return (
      <>
      {/* <h3>ABOUT</h3> */}
      <div className="hero2img">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{height :710}}

            src={lifesaver}
            alt="First slide"
          />
          <Carousel.Caption>
          <h3>BACKSTORY</h3>
            <p className="hero2-p">Kristian was working out at his local gym in Greeley & by fate met Dwight Randolph. Upon meeting, Kristian discovered that Dwight had late stage kidney failure and in urgent need of a lifesaving kidney transplant.</p> 
         <p className="hero2-p"> In that very moment Kristian offered to get tested. Kristian was in fact a match and he donated his kidney to save Dwight's life. Kristian 
          was so deeply moved by the experience that he has now dedicated his life to finding organ donors through his charity: #GoSaveALife</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{height :710}}
            src={fashion}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>WHAT DOES FASHION HAVE TO DO WITH IT?</h3>
            <p className="hero2-p">Kristian has used his social media following and connections within the fashion industry to spread the word about live organ donation. This has proven to be effective as successful matches have been found through this exposure!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{height :710}}
            src={awareness}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <p className="thanks">THANK YOU FOR YOUR INTEREST IN GO SAVE A LIFE. WE APPRECIATE YOUR SUPPORT</p>
          
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      </>
    );
  }
  


//   return (
    
//     <div className ="hero">
//     <div className="mask">
//       <img className="hero2img"
//       src={hero2Background} alt="background" /> 
//     </div>
//     <div className="content">
//       <div className="title-container">
//         <h1>ABOUT</h1>
//         </div>
//         <div className="about-img-container">    
//                 <img className="about-img"src ={lifesaver} alt='about'/>
//         </div>
//         <div className="about-info-container">
//         <p>Kristian was working out at his local gym in Greeley & by fate met Dwight Randolph. Upon meeting, Kristian discovered that Dwight had late stage kidney failure and in urgent need of a lifesaving kidney transplant.</p> 
//          <p> In that very moment Kristian offered to get tested. Kristian was in fact a match and he donated his kidney to save Dwight's life. Kristian 
//          was so deeply moved by the experience that he has now dedicated his life to finding organ donors through his charity: #GoSaveALife</p>
//          </div>
//         {/* <div className="hero-btn-container">
//         <a href="https://docs.google.com/forms/d/e/1FAIpQLSdXWz_LOPWMUUyTefH3-3R2u4myBsZyhB9EuPY-UW_kdQVWVw/viewform"
//         className="donor-btn">Become A Living Donor </a>
//         </div> */}
        
        
//     </div>
//     </div>
    
//   )
// }

export default Hero2Img