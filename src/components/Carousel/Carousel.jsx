// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css"

import React from "react";
import Slider from "react-slick";

 const SimpleSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className={styles.container}>
    <Slider {...settings} className={styles.slider}>
        <div className={styles.containerPhoto}>
          <img src={`${process.env.PUBLIC_URL}/images/dress1.jpeg`} className={styles.photo} alt="dress" />
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/dress2.jpg`} className={styles.photo} alt="dress" />
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/dress3.jpg`} className={styles.photo} alt="dress" />
        </div>  
      </Slider>
    </div>
  );
}
export default SimpleSlider