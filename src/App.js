import React from "react";
import "./index.css"
import {Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import Profiles from "./routes/Profiles"
function App() {
  return (
    <div className="App">
        <>
      
      <Routes>
       <Route path="/home" element={<Home/>}/>
       <Route path="/profiles" element={<Profiles/>}/>
      </Routes>
     </>
    </div>
  );
}

export default App;
