import React,{useState,useEffect} from 'react'
import "./newscarus.css"
import { swiffyslider } from 'swiffy-slider'
import Fullnews from '../../FullNews/Fullnews';
//mui
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
//import json
import NewCarusJson from  "./newCarus.json"
//import axios
import axios from "axios"
//Link
import {Link} from "react-router-dom"
import { useLocation } from 'react-router-dom';

function NewsCarus(props) {
    const  [dataFive ,  setdataFive] = useState([])
    const [Alldata,setAlldata] = useState([])
    useEffect(() => {
    axios.get("http://localhost:8000/api")
    .then((res) => {
      setAlldata()
      let currentData = []
      for(let i = 0 ; i<5 ; i++){
          currentData.push(res.data[i])
          setdataFive([...currentData])
      }
    },[])
    })
    let data = props.data
    let title = props.title 
  return (
    <> 
    <div>
    <div className='news__mobile'>
        <div className='main__all_title'>So’nggi yangiliklar</div>
          <div className=''>
            {
                (dataFive.length >0) &&
                dataFive.map((e,i) => {
                    return(
                        <div className="main__mobile_news" key={i}>
                            <div className='col-3'>
                                <img className='mobile__images'  src={e.profile} alt="" />
                            </div>
                            <div className='col-9'>
                                <div className='mobile__new_title'>
                                    <h6 className='news__carus__title_mobile' ><Link to="/information" className='news__carus__title_mobile'  state={data[i]}>{e.title}</Link> </h6>
                                    <div><Link to="/yangiliklar"><button className='mobile__new_btn'>{e.category.name}</button></Link>{((e.created_at).toString()).slice(0,10)} | {((e.created_at).toString()).slice(11,16)}</div>
                                </div>
                            </div>   
                            </div>
                    )
                })
            }
          </div>
        </div>
    </div> 
    </>
  )
}
window.addEventListener("load", () => {
    window.swiffyslider.init();
});
export default NewsCarus
