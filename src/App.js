import Header from './components/Header/Header';
import styles from './App.module.css';
import ToGuests from './components/ToGuests/ToGuests';
import Countdown from './components/Countdown/Countdown';
import Outfits from './components/Outfits/Outfits';
import SimpleSlider from './components/Carousel/Carousel';
import Schedule from './components/Schedule/Schedule';

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
      <Outfits />
      <SimpleSlider title='Мужчины' imgArray={imgMen} />
      <SimpleSlider title='Женщины' imgArray={imgWomen} />
      <Countdown />
    </div>
  );
}

export default App;
