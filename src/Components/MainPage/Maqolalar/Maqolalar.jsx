import React,{useState,useEffect} from 'react'
import "./maqolalar.css"

function Maqolalar() {
  return (
    <div>
        <div className="article__title__info">
            <div className='article__title'>Yangiliklar</div>
            <div ><button className="article__btn">Barchasi</button></div>
        </div>        
        <div className="container maqola__full">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center d-flex justify-content-center">
                  <div className='maqola__item'>   
                    <img src="./images/banner-01.jpg" alt="" />
                    <div className="maqola__full__info">
                      <span className='maqola__type'>| Maqola</span>  
                      <h6 className='maqola__text'>Lorem Ipsum is simply dummy text of</h6>
                      <span className='maqola__data'>29.01.2022 | 11.28</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
                <div className='maqola__item'>   
                    <img src="./images/banner-01.jpg" alt="" />
                    <div className="maqola__full__info">
                      <span className='maqola__type'>| Maqola</span>  
                      <h6 className='maqola__text'>Lorem Ipsum is simply dummy text of</h6>
                      <span className='maqola__data'>29.01.2022 | 11.28</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
                <div className='maqola__item'>   
                    <img src="./images/banner-01.jpg" alt="" />
                    <div className="maqola__full__info">
                      <span className='maqola__type'>| Maqola</span>  
                      <h6 className='maqola__text'>Lorem Ipsum is simply dummy text of</h6>
                      <span className='maqola__data'>29.01.2022 | 11.28</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
                <div className='maqola__item'>   
                    <img src="./images/banner-01.jpg" alt="" />
                    <div className="maqola__full__info">
                      <span className='maqola__type'>| Maqola</span>  
                      <h6 className='maqola__text'>Lorem Ipsum is simply dummy text of</h6>
                      <span className='maqola__data'>29.01.2022 | 11.28</span>
                    </div>
                  </div>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Maqolalar