import Carousel from 'react-bootstrap/Carousel';
import "./carusel.css"
function IndividualIntervalsExample() {
  return (
<div class="swiffy-slider slider-indicators-round">
    <ul class="slider-container">
        <li>
            <div id="slide1">
              <img src="./images/Reklama.jpg" alt="" />
            </div>
        </li>
        <li>
            <div id="slide2">
            <img src="./images/Reklama.jpg" alt="" />
            </div>
        </li>
        <li>
            <div id="slide3">
            <img src="./images/Reklama.jpg" alt="" />
            </div>
        </li>
        <li>
            <div id="slide4">
            <img src="./images/Reklama.jpg" alt="" />
            </div>
        </li>
        <li>
            <div id="slide5">
            <img src="./images/Reklama.jpg" alt="" />
            </div>
        </li>
        <li>
            <div id="slide6">
            <img src="./images/Reklama.jpg" alt="" />
            </div>
        </li>
        <li>
            <div id="slide7">
            <img src="./images/Reklama.jpg" alt="" />
            </div>
        </li>
        <li>
            <div id="slide8"></div>
        </li>
        <li>
            <div id="slide9"></div>
        </li>
    </ul>

    <button type="button" class="slider-nav"></button>
    <button type="button" class="slider-nav slider-nav-next"></button>

    <ul class="slider-indicators">
        <li class=""></li>
        <li class="active"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>
  );
}

export default IndividualIntervalsExample;