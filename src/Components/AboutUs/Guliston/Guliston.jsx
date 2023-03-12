import React,{useEffect} from 'react'
import LastNews from '../../CommonComponents/Lastnews/LastNews'
import "../Teatr/teatr.css"
import {Link} from "react-router-dom"

// import json 
import gulistonjson from "./gulistomjson.json"
function Guliston() {
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
                        <li ><Link to="/guliston" className='crumbs-item '>«Teatr» jurnali</Link></li>
                        <li>/</li>
                        <li ><Link to="/managment" className='crumbs-item'>Rahbariyat</Link></li>
                        <li>/</li>
                        <li className='crumbs-item main-item'>«Guliston» jurnali</li>
                    </ul>
                </div>
        {/* <img className='teatr_main_img' src="./images/big_img.jpg" alt="" /> */}
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-8 col-md-6 col-sm-12">
                <h3 className='text-center m-4'>“Guliston” jurnali haqida</h3>
                <br />
                <p>Dastlab “Yer yuzi” (1925-1931), “O‘zbekiston qurilishda” (1932), “Mash’ala” (1934) nomlari bilan jami 202 soni chiqqan. 1935 yil fevraldan hozirgi nomda nashr etilgan. “Guliston”ni nashr etish 1941-1967 yilgacha vaqtincha to‘xtatilgan. Keyinchalik unga Ibrohim Rahim (1967-1969), Asqad Muxtor (1969-1980), Mirmuhsin (1980-1993) Tilab Mahmudov (1994-2002) muharrirlik qilgan.</p>
                <br />
                <p>Jurnalda Abdulla Qodiriy, Cho‘lpon, Fitrat, Gʻafur Gʻulom, Oybek, Abdulla Alaviy va boshqa ijodkorlarning badiiy asarlari, ilmiy-publitsistik maqolalari chiqib turgan. Xorijiy mamlakatlar hayoti haqida qiziqarli ma’lumotlar ham berib borilgan. Ayniqsa, 70 yillarda “Guliston” respublikaning eng nufuzli va ommaviy jurnallaridan biriga aylangan. Jurnal sahifalarida “Farzandlar otalar haqida” rukni ostida 30-50-yillarda qatag‘on qilingan davlat arboblari, adabiyot va san’at namoyandalari haqida turkum maqolalar, “Temur tuzuklari” (to‘la bo‘lmagan shaklda), Rasul Hamzatovning “Mening Dog‘istonim” asari chop etilgan.</p>
                <br />
                <p>O‘zbekiston Vazirlar Mahkamasining 1993 yil 25 maydagi qaroriga muvofiq, respublikada nashr etilayotgan “Nafosat” va “Guliston” jur.lari negizida “Guliston” jurnali qayta tashkil etildi. 1994 yil yanvardan 2 oyda bir marta chiqadi. Jurnal saqifalarida madaniyat soxasiga oid materiallar asosiy o‘rin egallaydi. Unda madaniy meros va milliy qadriyatlar, teatr, musiqa, tasviriy san’at va xalq ijodiyoti, madaniy-ma’rifiy muassasalar va boshqa qardosh xalqlar hayoti haqida maqolalar berib boriladi.</p>
                <br />
                <p>Jurnal O‘zbekiston Respublikasi Prezidenti Administrasiyasi huzuridagi Axborot va ommaviy kommunikasiyalar (O‘zbekiston Matbuot va axborot) agentligining 0027-sonli guvohnomasi bilan ro‘yxatga olingan.</p>
                <ul className='teatr__ul'>
                    <li className='teatr__li'>Nashr muassisi O‘zbekiston Respublikasi Madaniyat vazirligi.</li>
                    <li className='teatr__li'>Tahririyatning bugungi kundagi adadi 4000 nusxani tashkil etadi.</li>
                    <li className='teatr__li'>Davriyligi: Bir yilda 6 ta. Har ikki oyda 1 marta chop etiladi.</li>
                    <li className='teatr__li'>Hajmi: 70x100 formatda 6 bosma taboq.</li>
                </ul>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12m mt-5">
                <LastNews data={gulistonjson}/>
            </div>
        </div>
    </div>
</div>
  )
}

export default Guliston