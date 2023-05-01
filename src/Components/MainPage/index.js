import React,{useEffect,useState} from 'react'
import Banner from './Banner/Banner'
import Carusel from './Carusel/Carusel'
import Carus from './Carusel/Carus'
import Journalcarusel from './JournalCarus/Journalcarusel'
import Maqolalar from './Maqolalar/Maqolalar'
import Yangiliklar from './Yangiliklar/Yangiliklar'
import Medialar from './Medialar/Medialar'
import NewsCarus from './NewsCarusel/NewsCarus'
import AllCarus from './AllCarus/AllCarus'
//css file
import "./mainindex.css"
// import jsons
import newsJson from "../../Components/MainPage/NewsCarusel/newCarus.json"
function index() {
  return (
    <div>
      {/* <Carusel/> */}
      <Carus/>
      <Banner />
      <AllCarus/>
      {/* <NewsCarus data={newsJson} class="carusdiv"/> */}
      <div className='testclass'>
       {/* <NewsCarus data={newsJson} className="carusdiv"/> */}
      {/* <NewsCarus data={newsJson} className="carusdiv"/>  */}
      </div> 
      <Medialar />
      {
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23970.865031985482!2d69.23254532805814!3d41.322825224493265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b72efbb0c17%3A0xa52a74c6aab1b415!2zMzAg0L_RgNC-0YHQv9C10LrRgiDQndCw0LLQvtC4LCDQotCw0YjQutC10L3Rgiwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1669964958749!5m2!1sru!2s"></iframe>
          </div>
         </div>
      }
    </div>
  )
}

export default index