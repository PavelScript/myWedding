import Header from './components/Header/Header';
import styles from './App.module.css';
import ToGuests from './components/ToGuests/ToGuests';
import Countdown from './components/Countdown/Countdown';
import Outfits from './components/Outfits/Outfits';
import SimpleSlider from './components/Carousel/Carousel';



function App() {
  return (
    <div className={styles.app}>
      <Header />
      <ToGuests />
      <Outfits />
      <SimpleSlider />
      <Countdown />
    </div>
  );
}

export default App;
