import React from 'react';
import { Carousel } from 'react-bootstrap';
import bgImg from "../../../assets/img/heroimg2.jpg";
import '../../../css/common/header/BootsrtapCarousel.css'

export default function BootstrapCarousel() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="heroimg"
            src={bgImg}

            alt="First slide"
            height={100}
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
    </>
  )
}
// export default SimpleSlider;
// export default class SimpleSlider extends Component {
//   render() {
// }