import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { AiOutlineClockCircle } from 'react-icons/ai';
import "./fullnews.css"
import LastNews from '../CommonComponents/Lastnews/LastNews';

//import jsom
import fullmainjson from "./fulmainjson.json"
function Fullnews(props) {
     let location = useLocation()
     let data = location.state
     var time = data.created_at
     var timeline = time.toString()
     let Day = timeline.slice(0,10)
     let Hour = timeline.slice(11,16)
     useEffect(() => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },[])
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12 ">
                <div>
                    <h2 className='mt-5 '>{data.title}</h2>
                    <p className='mb-3'><AiOutlineClockCircle className='time__icon' /> {Day} | {Hour}</p>
                </div>
                <img className='mb-5' src={data.profile} alt="image"  />
                <div
                  dangerouslySetInnerHTML={{__html: data.body}}
                />
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mt-5 pt-5">
            <LastNews data={fullmainjson}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Fullnews