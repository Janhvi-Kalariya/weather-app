
import React, {useState , useEffect } from "react"; 
import Header from "./Header.js";
import WeatherComponent from "./WeatherComponent.js";
import Footer from "./Footer.js";

function App() {

  return (
    <div className="App">
      <Header/>
      <WeatherComponent/>
      <Footer/>
    </div>
    
  );
}

export default App;
