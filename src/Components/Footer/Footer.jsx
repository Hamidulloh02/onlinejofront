import React from 'react'
import "./footer.css"
// import rect-icon
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsTelegram } from 'react-icons/bs';
import { MdOutlineMail } from 'react-icons/md';
import { AiTwotonePhone } from 'react-icons/ai';
import { Link } from '@mui/material';
function Footer() {
    function TopBtn(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
  return (
    <div className='full__footer' id="topIconref">
        <div className='footer_main_logo ms-5 ps-5'>
           <img className='footer_logo' src="./images/jurnal__logo.png" alt="" />
           {/* <hr className='liner'/> */}
        </div>  
        <div className="container " >
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <ul className='footermenumain'>
                        <li className='footer_tit'>JURNALLAR</li>
                        <li className='footer_item'>Barcha jurnallar</li>
                        <li className='footer_item'>"Teatr" jurnali</li>
                        <li className='footer_item'>"Guliston" jurnali</li>
                        <li></li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <ul  className='footermenumain'>
                        <li  className='footer_tit'>OMMAVIY OFERTA</li>
                        <li className='footer_item'>Shaxsiylik siyosati</li>
                        <li className='footer_item'>Ommaviy oferta</li>
                        <li className='footer_item'>Aloqa</li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <ul  className='footermenumain'>
                        <li  className='footer_tit'>ALOQA</li>
                        <li className='footer_item'>E-pochta va telefon raqamlar:</li>
                        <li className='footer_item'><MdOutlineMail className='me-1'/>info@online-journal.uz</li>
                        <li className='footer_item'><AiTwotonePhone className='me-1'/>+998 71 244 60</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="container">
            <div>
                <ul className='network'>
                   <Link><li className='netwok_item text-primary'><BsFacebook/></li></Link> 
                   <Link><li className='netwok_item text-danger'><BsInstagram/></li></Link> 
                   <Link href='https://t.me/online_journal_uz'><li className='netwok_item text-primary'><BsTelegram/></li></Link>                     
                   <Link><li className='netwok_item text-danger'><BsYoutube/></li></Link>
                </ul>
            </div>
        </div>
        <div className='d-flex justify-content-center ms-4'>
            <p>© ONLAYN JURNAL | www.onlaynjurnal.uz barcha huquqlar himoyalangan.</p>
        </div>
        {/* <div className="topIcon">
        </div> */}
    </div>
  )
}

export default Footer