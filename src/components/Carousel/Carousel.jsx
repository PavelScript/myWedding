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

  const imgArray = [
  `${process.env.PUBLIC_URL}/images/dress1.jpeg`,
  `${process.env.PUBLIC_URL}/images/dress2.jpg`,
  `${process.env.PUBLIC_URL}/images/dress3.jpg`
];
  const renderImage = (imageSrc) => {
    
    return ( 
      <div className={styles.containerPhoto}>
        <img src={imageSrc} className={styles.photo} alt="dress" />
      </div> 
    )
  }
  return (
    <div className={styles.container}>
    <h3 className={styles.men}>Мужчины</h3>
    <Slider {...settings} className={styles.slider}>
        
          {imgArray.map(renderImage)}
          
        
      </Slider>
    </div>
  );
}
export default SimpleSlider