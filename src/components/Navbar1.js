import "./Navbar1Styles.css"

import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"
import logo from "../assets/logo.png"
const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const[color, setColor] = useState(false);
    const changeColor = () =>{
      if(window.scrollY >=100){
         setColor(true);
  } else{
    setColor(false)
  } 
  }

  window.addEventListener("scroll", changeColor)
  return (
    <div className={color ? "header header-bg":
    "header"}>
      <Link to="/home">
       <img src={logo} className="logo"></img>
      </Link>
      <ul className={click ? "nav-menu active" : 
      "nav-menu"}>
        <li>
            <Link to ="/home">Home</Link>
        </li>
        <li>
            <Link to ="/view-profiles">View Profiles</Link>
        </li>
        <li>
            <Link to ="/create">Create A Profiles</Link>
        </li>
        
        
        
      </ul>
      <div className="hamburger" onClick=
      {handleClick}>
      {click ? (
        <FaTimes size={20} style={{color:
        "#222"}}/>
        ) : (
        <FaBars size={20} style={{color:"#222"
        }}/>
        )}
      </div>
    </div>
  )
}

export default Navbar