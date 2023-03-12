import React from 'react'
import "./banner.css"
import { Link } from "react-router-dom"
//Lazy load
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function Banner() {
  return(
    <>
    <div className='banber__full01'> <div className='container banner__full'>
            <div className="row">
              <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12'>
                <div className="banner__01">
                  <LazyLoadImage
                  className='img__banner'
                    alt="banner"
                    effect="blur"
                    src="./images/TeatrCarus/teatr03.jpg" />
                </div>

              </div>
              <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12'>
                <div className='banner__text_main'>
                  <div className='mt-5 mb-5'>
                    <p className='text-center me-5'>Onlayn jurnal</p>
                    <div className=' banner__text'>
                      <p>Onlayn jurnal o‘qing </p>
                    </div>
                    <p>Endi siz jurnallarimizni o‘zingiz istagan paytda, istalgan joyda o‘qishingiz mumkin.</p>
                    <Link to="/contact" className='link__obuna'><button className='main__btn'>Obuna bo‘ling</button></Link>
                    <a to='https://t.me/online_journal_uz' className='link__obuna'><button className='main__btn02 mt-2'>Elektron jurnal xarid qilish</button></a>
                  </div>
                </div>
              </div>
              <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12'>
                <div className="banner__02">
                  <LazyLoadImage
                  className='img__banner'
                    alt="banner"
                    effect="blur"
                    src="./images/banner-02.jpg" />
                </div>
              </div>
            </div>
          </div>
          </div>
    </>
  )
}

export default Banner