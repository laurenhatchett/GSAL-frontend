import "./WhatWeDoStyles.css"
import React from 'react'

import fashion3 from '../assets/fashion3.jpeg'
import fashion5 from '../assets/fashion5.jpeg'
import fashion from '../assets/fashion.jpeg'
import fashion7 from '../assets/fashion7.jpeg'
import fashion12 from '../assets/fashion12.jpeg'
import fashion13 from '../assets/fashion13.jpeg'
import awareness1 from '../assets/awareness1.png'
import awareness2 from '../assets/awareness2.jpeg'
import awareness3 from '../assets/awareness3.jpeg'
import awareness6 from '../assets/awareness6.jpeg'
import awareness7 from '../assets/awareness7.png'
import awareness8 from '../assets/awareness8.jpeg'


const WhatWeDo = () => {
  return (
    <div className="what-container">
   <div className="fashion-title-container">
      <h2 className="outreach-title">OUTREACH</h2>
    </div>

    <div className="why-statement-container">
    <h2 className="why-statement">Kristian and Dwight have shared their story on several news stations and have given speeches at hospital conferences. They have also interviewed live donors and individuals in need.</h2>
    </div>
    <div className="wrapper">
      <div className="item">
        <img className="item-img"
          src={awareness1} alt="fashion" /> 
    </div>
    <div className="item">
        <img className="item-img"
          src={awareness2} alt="fashion" /> 
    </div>
    <div className="item">
        <img className="item-img"
          src={awareness3} alt="fashion" /> 
    </div>
    
    
    <div className="item">
        <img className="item-img"
          src={awareness6} alt="fashion" /> 
    </div>
    <div className="item">
        <img className="item-img"
          src={awareness7} alt="fashion" /> 
    </div>
    <div className="item">
        <img className="item-img"
          src={awareness8} alt="fashion" /> 
    </div>
    
    
  
    </div>


    <div className="why-statement-container">
    <h2 className="why-statement">Go Save A Life produces fashion shows with the mission to leverage the platforms of models, designers and photographers. Follow us on social media platforms for event information. </h2>
    </div>
  <div className="wrapper">
    
    
    <div className="item">
      <img className="item-img"
          src={fashion3} alt="fashion" /> 
    </div>
    
    <div className="item">
      <img className="item-img"
          src={fashion5} alt="fashion" /> 
    </div>
    <div className="item">
      <img className="item-img"
          src={fashion} alt="fashion" /> 
    </div>
    <div className="item">
      <img className="item-img"
          src={fashion7} alt="fashion" /> 
    </div>
    
    <div className="item">
      <img className="item-img"
          src={fashion12} alt="fashion" /> 
    </div>
    <div className="item">
      <img className="item-img"
          src={fashion13} alt="fashion" /> 
    </div>

  </div>

  
    </div>
  )
}

export default WhatWeDo
