import React from 'react'
import "./mediaStyle.css"

function Medialar() {
  return (
    <div>
       <div className="article__title__info">
          <div className='article__title'>Medialar</div>
          <div ><button className="article__btn">Barchasi</button></div>
        </div>
      <div className=" full__video">
        <div class="swiffy-slider slider-item-show3  slider-nav-outside .slider-item-reveal slider-nav-animation slider-nav-animation-fadein">
          <ul class="slider-container ">
            <li class="">
              <div class="card shadow h-70 ">
                <div class="ratio ratio-16x9 ">
                <iframe className='video__m' width="560" height="315" src="https://www.youtube.com/embed/OoU0IP9Vhds" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </li>
            <li class="">
              <div class="card  h-70">
                <div class="ratio ratio-16x9">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/aJf6IsQkmiQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </li>
            <li class="slide-visible">
              <div class="card shadow h-70">
                <div class="ratio ratio-16x9">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/UNNpiVWgypM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </li>
            <li class="slide-visible">
              <div class="card shadow h-70">
                <div class="ratio ratio-16x9">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/P9nu2OFIMJQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </li>
            <li class="">
              <div class="card shadow h-70">
                <div class="ratio ratio-16x9">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/P9nu2OFIMJQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </li>
            <li class="">
              <div class="card shadow h-70">
                <div class="ratio ratio-16x9">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/QmbT8ytZYxY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </li>
          </ul>

          <button type="button" class="slider-nav" aria-label="Go left"></button>
          <button type="button" class="slider-nav slider-nav-next" aria-label="Go left"></button>

          <div class="slider-indicators">
            <button class="" aria-label="Go to slide"></button>
            <button aria-label="Go to slide"></button>
            <button aria-label="Go to slide" class="active"></button>
            <button aria-label="Go to slide" class=""></button>
            <button aria-label="Go to slide" class=""></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Medialar