import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { AiOutlineClockCircle } from 'react-icons/ai';
import "../FullNews/fullnews.css"
import LastNews from '../CommonComponents/Lastnews/LastNews';
//import jsom
import fullmainjson from "../FullNews/fulmainjson.json"
function ArxivFull() {
    let location = useLocation()
    let data = location.state

    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      },[])
  return (
    <div className="container">
    <div className="row">
        <div className="col-lg-8 col-md-12 col-sm-12 ">
            <div>
                <h2 className='mt-5 '>{data.title}</h2>
            </div>
            <div className="tetararxivimg">
             <img className='mb-5' src={data.image} alt="image"/>
            </div>
            <div
              dangerouslySetInnerHTML={{__html: data.body}}
            />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 mt-5 pt-5">
        <LastNews data={fullmainjson}/>
        </div>
    </div>
  </div>
  )
}

export default ArxivFull