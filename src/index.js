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
      <Route path="/contact" element={<Contact/>}/>
      <Route path='/information' element={<Fullnews/>}/>
      <Route path='/arxiv' element={<ArxivMain/>}/>
      {/* <Route path='/arxivtada' element={<ArxivFull/>}/> */}
      <Route path='http://localhost:8000/admin/'/>
    </Route>
  </Routes>
  </BrowserRouter>
);