import React,{useState,useEffect} from 'react'
import LastNews from '../CommonComponents/Lastnews/LastNews'
import teatrjson from "../../Components/AboutUs/Teatr/teatrjson.json"
import axios from "axios"
import "./teatrarxiv.css"
import {Link} from "react-router-dom"
//Lazy load
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function ArxivMain() {
    const [arxivdata,setarxivdata] = useState([])
    const [arxivcategory,setarxivcategory] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/teatrarxiv")
        .then((res) => {
            setarxivdata(res.data)
        })
        axios.get("http://localhost:8000/teatrarxiv/category")
        .then((res) => {
            setarxivcategory(res.data)
        })
    },[])
    console.log(arxivdata)
    console.log(arxivcategory)
  return (
    <div>
        <div className="container">
            <div className="row ms-5">
            <div className="col-11 mt-3">
                <div className="row">
                {
                (arxivdata.length >0) &&
                arxivdata.map((e,i) => {
                    return(
                        <>
                         <div className="col-lg-3 col-md-6 col-sm-12 pt-4 bt-4">
                            <Link to="/arxivtada"  state={arxivdata[i]} className='link_teatrarxiv'>
                            <div className='card_div'>
                                <div className='on_colour' ></div>
                                <div className='' >
                                <h5>{e.title}</h5>
                                <div className='card_img'>
                                <LazyLoadImage
                                      className='slider__img'
                                      alt="teatrarxiv"
                                      effect="blur"
                                      src={e.image}/>
                                </div>                          
                                </div>
                            </div>
                            </Link>
                         </div>
                        </>
                    )
                })
             }
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ArxivMain