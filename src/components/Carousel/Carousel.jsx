
import styles from "./Carousel.module.css"
import React from "react";
import Slider from "react-slick";

const SimpleSlider = ({title, imgArray, bgColor}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,

  };

  return (
    <div className={styles.container} style={{backgroundColor: bgColor}}>
      <h3 className={styles.men}>{title}</h3>
      <Slider {...settings} className={styles.slider}>
        {imgArray.map((src, index) => (
          <div key={index}>
            <div className={styles.containerPhoto}>
              <img 
                src={`${process.env.PUBLIC_URL}${src}`} 
                className={styles.photo} 
                alt={`${title} ${index + 1}`} 
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider