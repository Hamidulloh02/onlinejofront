import React, { useState, useEffect, useRef } from 'react'
import "./newscarus.css"
import { swiffyslider } from 'swiffy-slider'
import Fullnews from '../../FullNews/Fullnews';
//mui
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
//import json
import NewCarusJson from "./newCarus.json"
//import axios
import axios from "axios"
//Link
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';
//Lazy load
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// swiper
// import React, { useRef} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";


function NewsCarus(props) {
    const [dataFive, setdataFive] = useState([])
    const [Alldata, setAlldata] = useState([])
    useEffect(() => {
        axios.get(process.env.REACT_APP_API + "/api")
            .then((res) => {
                setAlldata(res.data)
                let currentData = []
                for (let i = 0; i < 5; i++) {
                    currentData.push(res.data[i])
                    setdataFive([...currentData])
                }
            })
    }, [])
    let data = props.data
    let title = props.title
    return (
        <>
            <div>
                <div className='newsCarus__full'>
                    <div className='newsTitle'>
                        <div className='news__Title__text'>
                            <div>
                                <h4 className='newcarustitle001'>{title}</h4>
                                {/* <button className='newAllbtn'>Barchasi</button>*/}
                            </div>
                        </div>
                    </div>
                    {
                        (data.length >0) ?
                            <Swiper
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                                slidesPerView={3}
                            >
                                {(data.length > 0) &&
                                    data.map((e, i) => {
                                        return (
                                            <SwiperSlide>
                                                <div>
                                                    <LazyLoadImage
                                                        className='slider__img'
                                                        alt="carus-img"
                                                        effect="blur"
                                                        src={e.profile} />
                                                    <h6 className='news__carus__title_desktop ps-2' ><Link to={`/news/${e.id}`} state={data[i]} className='new_carus_title'>{e.title}</Link> </h6>
                                                    <div className='d-flex '>
                                                        <button className='btn_btn_yellow'>{e.category.name}</button>
                                                        <div className='mt-2 date_hour'> {((e.created_at).toString()).slice(0, 10)} | {((e.created_at).toString()).slice(11, 16)}</div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                            :
                            <div className='d-flex'>
                                <Stack spacing={1} className="me-2 ps-3">
                                    <Skeleton variant="rectangular" width={290} height={190} />
                                    <Skeleton variant="rounded" width={290} height={80} />
                                </Stack>
                                <Stack spacing={1} className="me-2">
                                    <Skeleton variant="rectangular" width={290} height={190} />
                                    <Skeleton variant="rounded" width={290} height={80} />
                                </Stack>
                                <Stack spacing={1} className="me-2">
                                    <Skeleton variant="rectangular" width={290} height={190} />
                                    <Skeleton variant="rounded" width={290} height={80} />
                                </Stack>
                                <Stack spacing={1} className="me-2">
                                    <Skeleton variant="rectangular" width={290} height={190} />
                                    <Skeleton variant="rounded" width={290} height={80} />
                                </Stack>
                            </div>
                    }
                </div>
            </div>
            <div>
                <div className='news__mobile'>
                    <div className=''>
                        {
                            (dataFive.length > 0) ?
                                dataFive.map((e, i) => {
                                    return (
                                        <div className="main__mobile_news" key={i}>
                                            <div className='col-3'>
                                                <img className='mobile__images' src={e.profile} alt="" />
                                            </div>
                                            <div className='col-9'>
                                                <div className='mobile__new_title'>
                                                    <h6 className='news__carus__title_mobile' ><Link to={`/news/:${e.id}`} className='news__carus__title_mobile' state={data[i]}>{e.title}</Link> </h6>
                                                    <div><Link to="/yangiliklar"><button className='mobile__new_btn'>{e.category.name}</button></Link>{((e.created_at).toString()).slice(0, 10)} | {((e.created_at).toString()).slice(11, 16)}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) :
                                <div>

                                </div>
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
