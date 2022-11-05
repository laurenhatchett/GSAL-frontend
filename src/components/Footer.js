import "./FooterStyles.css"

import React from 'react'

import {FaPhone, FaMailBulk, FaFacebook, FaInstagramSquare, FaYoutube} from "react-icons/fa"


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "#fff" , marginRight: "2rem"}} />
                    720-492-4814
                     </h4>
                </div>
                <div className="email"> <h4><FaMailBulk size={20} style={{color: "#fff" , marginRight: "2rem"}} />Gosavealifedonate@gmail.com
                </h4>
                </div>
            
                <div className="social">
                <a href="https://www.facebook.com/GoSaveALife">
                    <FaFacebook size={30} style={{color: "#000000" , marginRight: "1rem"}} />
                </a>
                <a href="https://www.instagram.com/gosavealifedonate/">
                    <FaInstagramSquare size={30} style={{color: "#000000" , marginRight: "1rem"}} />
                </a>
                <a href="https://www.youtube.com/channel/UC8OSKc2CRW8FSA0ChXwDLoQ">
                    <FaYoutube size={30} style={{color: "#000000" , marginRight: "1rem"}} />
                </a>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Footer