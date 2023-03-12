import React,{useEffect} from 'react'
import LastNews from '../../CommonComponents/Lastnews/LastNews'
import "../Teatr/teatr.css"
import {Link} from "react-router-dom"
// import json
import contactjson from "./contactjson.json"
function Contact() {
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      },[])
    return (
        <div>
    <div className='teatr__main __back_img'>
        <div className="back__color"></div>
        <div className='main__text'>
                    <ul className='crumbs'>
                        <li className='crumbs-item'>«Ommaviy oferta shartlari»</li>
                    </ul>
                </div>
        {/* <img className='teatr_main_img' src="./images/big_img.jpg" alt="" /> */}
    </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-6 col-sm-12">
                        <h3 className='text-center m-4'>Ommaviy oferta shartlari tanishish</h3>
                        <br />
                        <b>Aloqa ma’lumotlari:</b>
                        <br />
                        <p>Jurnal O‘zbekiston Respublikasi Prezidenti Administrasiyasi huzuridagi Axborot va ommaviy kommunikasiyalar (O‘zbekiston Matbuot va axborot) agentligining 0027-sonli guvohnomasi bilan ro‘yxatga olingan.</p>
                        <ul className='teatr__ul'>
                            <li className='teatr__li'>“Guliston” va “Teatr” jurnallari birlashgan tahririyati.</li>
                            <li className='teatr__li'>ИНН: 307774449,</li>
                            <li className='teatr__li'>MFO: 00014,</li>
                            <li className='teatr__li'>H/R: 400110860262777084300056001, 100010860262777084300056002</li>
                            <li className='teatr__li'>Bank: Ipoteka bank mehnat filiali</li>
                        </ul>
                        <br />
                        <p>
                            <ul>
                                <li>Yuridik manzil: Toshkent sh., 100129, Navoiy ko‘chasi, 30-uy</li>
                                <li>Haqiqiy manzil: Toshkent sh., 100129, Navoiy ko‘chasi, 30-uy</li>
                            </ul>
                        </p>
                        <br />
                        <hr />
                        <p>Obuna bo‘lish yoki nashrlarni qabul qilish bilan bog‘liq muammolarga duch kelsangiz, quyidagi telefonlar orqali obuna bo‘lish xizmatiga murojaat qiling:</p>
                        <br />
                        <p>+998 (71) 244-74-19 yoki info@online-journal.uz elektron pochtasi orqali savol bering.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12m mt-5 pt-5">

                        <LastNews data={contactjson}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact