import React,{useState,useEffect} from "react";
import MainPage from "../src/Components/MainPage/index"
import Teatr from "./Components/AboutUs/Teatr/Teatr";
import Footer from "./Components/Footer/Footer";
import {Outlet} from "react-router-dom"
import "../src/App.css"
// import animation
import Animation from "../src/Components/Navbar/NewNav"
import Navbar from "./Components/Navbar/Navbar";
import ReactDOM from 'react-dom'
import Snowfall from 'react-snowfall'
import { AiOutlineUp, AiTwotonePrinter } from 'react-icons/ai';

function App() {
  const [animated,setanimated] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setanimated(true)
    },2000)
  })
  function TopEnter(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <>
    <div className="App">
      {
        (animated == true)?
        <div>
            <Navbar id="#top_btn"/>
            <Outlet/>
            <Footer/>
        </div>
         :
        <div className="animation_first">
             <Animation/>
        </div>
      }
    </div>    
    {/* <div style={{className:"snowanimation" }}>
        <Snowfall />
      </div>, */}
      {/* <a href="top_btn">
      <div className="top_icon_btn">
      <AiOutlineUp />
      </div>
      </a> */}
    </>

  );
}
export default App;
