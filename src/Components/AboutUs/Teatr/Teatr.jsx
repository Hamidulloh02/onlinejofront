import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import "./teatr.css"
import axios from "axios"
import LastNews from '../../CommonComponents/Lastnews/LastNews'
// import json
import teatrjson from "./teatrjson.json"
//import mui
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

function Teatr() {
    const [array, setarray] = useState([])
    let data = []
    useEffect(() => {
        axios.get("http://localhost:8000/api/v1/?limit=6&offset=0")
            .then((res) => {
                setarray(res.data.results)
            })
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
    }, [])
    {
        for (let i = 0; i < array.length - 2; i++) {
            data.push(array[i])
        }
    }
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }
    return (
        <div>
            <div className='teatr__main __back_img'>
                <div className="back__color"></div>
                <div className='main__text'>
                    <ul className='crumbs'>
                        <li ><Link to="/guliston" className='crumbs-item '>«Guliston» jurnali</Link></li>
                        <li>/</li>
                        <li ><Link to="/managment" className='crumbs-item'>Rahbariyat</Link></li>
                        <li>/</li>
                        <li className='crumbs-item main-item'>«Teatr» jurnali</li>
                    </ul>
                </div>
                {/* <img className='teatr_main_img' src="./images/big_img.jpg" alt="" /> */}
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-6 col-sm-12">
                        <h3 className='text-center m-4'>“Teatr” jurnali haqida</h3>
                        <br />
                        <p>“Teatr” adabiy-badiiy, axborot-reklama jurnali O‘zbekiston Respublikasi Prezidentining “O‘zbekiston teatr san’atini rivojlantirish to‘g‘risida”gi 1998 yil 26 martdagi PF-1980-son farmoniga binoan Vazirlar Mahkamasining 22 may 1998 yil № 223 qarori bilan tashkil etilgan.</p>
                        <br />
                        <p>Jurnal O‘zbekiston Respublikasi Prezidenti Administrasiyasi huzuridagi Axborot va ommaviy kommunikasiyalar (O‘zbekiston Matbuot va axborot) agentligining 0027-sonli guvohnomasi bilan ro‘yxatga olingan.</p>
                        <ul className='teatr__ul'>
                            <li className='teatr__li'>Nashr muassisi O‘zbekiston Respublikasi Madaniyat vazirligi.</li>
                            <li className='teatr__li'>Tahririyatning bugungi kundagi adadi 4000 nusxani tashkil etadi.</li>
                            <li className='teatr__li'>Davriyligi: Bir yilda 6 ta. Har ikki oyda 1 marta chop etiladi.</li>
                            <li className='teatr__li'>Ҳажми: А-4 форматда 6 босма табоқ.</li>
                        </ul>
                        <br />
                        <p>
                            “Teatr” jurnalida o‘zbek, rus va ingliz tillaridagi maqolalar chop etilgan holda O‘zbekiston xalqining moddiy-ma’naviy qadriyatlari, milliy san’atning barcha janrlari haqida axborot tarqatish, ayniqsa teatr san’atining eng yaxshi namunalari, muammolari va xalq ijodi, respublikaning madaniy-ma’rifiy muassasalari faoliyatini yoritadi.
                        </p>
                        <br />
                        <p>Jurnal sahifalarida e’lon qilinayotgan maqolalar, axborotlar hamda  xalqaro va respublika miqyosidagi madaniy tadbirlar yuqori professional darajada, ob’yektiv va haqqoniy yondashgan holda yoritiladi.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12m mt-5">
                        <LastNews data={teatrjson} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teatr