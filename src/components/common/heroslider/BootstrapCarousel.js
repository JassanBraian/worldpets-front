import React from 'react';
import { Carousel } from 'react-bootstrap';
import bgImg from "../../../assets/img/heroimg2.jpg";

export default function BootstrapCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="heroimg"
            src={bgImg}

            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="heroimg"

            src={bgImg}
            alt="Second slide"
          />


        </Carousel.Item>
        <Carousel.Item>
          <img
            className="heroimg"
            src={bgImg}

            alt="Third slide"
          />


        </Carousel.Item>
      </Carousel>
    </div>
  )
}
// export default SimpleSlider;
// export default class SimpleSlider extends Component {
//   render() {
// }