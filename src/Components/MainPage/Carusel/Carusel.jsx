import Carousel from 'react-bootstrap/Carousel';
import "./carusel.css"
function IndividualIntervalsExample() {
  return (
    <Carousel className='carus__full__main '>
      <Carousel.Item >
        <img
          className="d-block w-100 carus__images"
          src="./images/pegas02.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100 carus__images"
          src="./images/faktorRek.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;