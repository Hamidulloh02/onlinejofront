import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage/index"
import Teatr from './Components/AboutUs/Teatr/Teatr';
import Guliston from './Components/AboutUs/Guliston/Guliston';
import Management  from "./Components/AboutUs/Managements/Mamage"
import Yangiliklar from './Components/MainPage/Yangiliklar/Yangiliklar';
import Contact from './Components/AboutUs/Contact/Contact';
import Fullnews from './Components/FullNews/Fullnews';
import ArxivMain from './Components/TeatrArxiv/ArxivMain';
import ArxivFull from "./Components/TeatrArxiv/ArxivFull"
//bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/teatr' element={<Teatr/>}/>
      <Route path='/guliston' element={<Guliston/>}/>
      <Route path='/management' element={<Management/>}/>
      <Route path='/yangiliklar' element={<Yangiliklar/>}/>
      <Route path='/news/:id' element={<Fullnews/>} />
      <Route path="/contact" element={<Contact/>}/>
      {/* <Route path='/information' element={<Fullnews/>}/> */}
      <Route path='/arxiv' element={<ArxivMain/>}/>
      {/* <Route path='/arxivtada' element={<ArxivFull/>}/> */}
    </Route>
  </Routes>
  </BrowserRouter>
);