import React,{useEffect} from 'react'
import "./managemen.css"
import {Link} from "react-router-dom"

function Mamage() {
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      },[])
  return (
    <div >
        <div className='managment__menu managment__full'>
            <div className='maneg__back__color'></div>
            <div className='main__text'>
                    <ul className='crumbs'>
                        <li ><Link to="/guliston" className='crumbs-item '>«Guliston» jurnali</Link></li>
                        <li>/</li>
                        <li ><Link to="/managment" className='crumbs-item'>«Teatr» jurnali</Link></li>
                        <li>/</li>
                        <li className='crumbs-item main-item'>Rahbariyat</li>
                    </ul>
                </div>
        </div>
        <div className="container managment__full">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card m-3 mt-5">
                        <div className="d-flex align-items-center">

                            <div className="col-5">
                                <img className='managments__imgs managment__full' src="./images/rahbarlar/shahribonu-imomova.jpg" alt="" />
                            </div>
                            <div className="col-7 p-4">  
                            <h4 className="magamend__title">Imomova Shahribonu Komilovna</h4>
                            <p>“Guliston” va “Teatr” jurnallari Birlashgan tahririyati bosh muharriri</p>
                            <p><b>Qabul kunlari:</b>  Juma, 10:00-12:00</p>
                            <p><b>Telefon raqami:</b>  (71) 244-41-61</p>
                            <p><b>E-Mail:</b>info@online-journal.uz</p>

                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="card m-3">
                        <div className="d-flex align-items-center">
                            <div className="col-5">
                                <img className='managments__imgs' src="./images/rahbarlar/hazratqulov-mamatqul1.png" alt="" />
                            </div>
                            <div className="col-7 p-4">  
                            <h4 className="magamend__title">Mamatqul Hazratqulov </h4>
                            <p>“Guliston” va “Teatr” jurnallari Birlashgan tahririyati bosh muharriri o‘rinbosari</p>
                            <p>(«Guliston» jurnali nashri uchun mas’ul)</p>
                            <p><b>Qabul kunlari:</b>  Juma, 10:00-12:00</p>
                            <p><b>Telefon raqami:</b>  (71) 244-45-04</p>
                            <p><b>E-Mail:</b>info@online-journal.uz</p>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="card m-3">
                        <div className="d-flex align-items-center">
                            <div className="col-5">
                                <img className='managments__imgs' src="./images/rahbarlar/SHAVKAT.jpg" alt="" />
                            </div>
                            <div className="col-7 p-4">  
                            <h4 className="magamend__title">Bobomurodov Shavkat Do‘stmuhammad o‘g‘li</h4>
                            <p>“Guliston” va “Teatr” jurnallari Birlashgan tahririyati bosh muharriri o‘rinbosari </p>
                            <p>(«Teatr» jurnali nashri uchun mas’ul)</p>
                            <p><b>Qabul kunlari:</b>  Dushanba, 10:00-12:00</p>
                            <p><b>Telefon raqami:</b>  (71) 244-45-04</p>
                            <p><b>E-Mail:</b>info@online-journal.uz</p>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mamage