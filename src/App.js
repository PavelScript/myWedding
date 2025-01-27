import Header from './components/Header/Header';
import styles from './App.module.css';
import ToGuests from './components/ToGuests/ToGuests';
import Countdown from './components/Countdown/Countdown';
import Outfits from './components/Outfits/Outfits';
import SimpleSlider from './components/Carousel/Carousel';
import Schedule from './components/Schedule/Schedule';
import Place from './components/Place/Place';


const imgMen = [
  '/images/MenDresscode/dress1.jpeg',
  '/images/MenDresscode/dress2.jpg',
  '/images/MenDresscode/dress3.jpg'
];

const imgWomen= [
  '/images/WomenDresscode/dress4.jpg',
  '/images/WomenDresscode/dress1.jpg',
  '/images/WomenDresscode/dress3.jpg'
];

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <ToGuests />
      <Schedule />
      <Place bgColor='#fdf5e6' text='Сбор гостей возле ЗАГС' address='ул. ​Малыгина, 85' imgSrc='/images/gatheringPoint.png' /> 
      <Place bgColor='rgb(239, 218, 187)' text='Далее направляемся в' address='ул. Мельникайте, 103а' imgSrc='/images/7Sky.png' />
      <Outfits />
      <SimpleSlider title='Мужчины' imgArray={imgMen} bgColor='rgb(239, 218, 187)'/>
      <SimpleSlider title='Женщины' imgArray={imgWomen} bgColor='#fdf5e6'/>
      <Countdown />
    </div>
  );
}

export default App;
