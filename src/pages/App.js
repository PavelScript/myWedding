import Header from '../components/Header/Header';
import styles from './App.module.css';
import ToGuests from '../components/ToGuests/ToGuests';
import Countdown from '../components/Countdown/Countdown';
import Outfits from '../components/Outfits/Outfits';
import Schedule from '../components/Schedule/Schedule';
import Place from '../components/Place/Place';
import SendForm from '../components/SendForm/SendForm';



function App() {


  return (
    <div className={styles.app}>
      <Header />
      <ToGuests bgColor='#fdf5e6'/>
      <Schedule bgColor='#CECECD' gradient='linear-gradient(356deg, rgba(206,206,205,1) 35%, rgba(253,245,230,1) 100%)'/>
      <div className={styles.rowContainerPlaces}>
        <Place bgColor='#fdf5e6' text='Сбор гостей возле ЗАГС' address='ул. ​Малыгина, 85' imgSrc='/images/gatheringPoint.png' time='16:00' mainText='Место встречи' /> 
        <Place bgColor='#CECECD' gradient='linear-gradient(356deg, rgba(206,206,205,1) 35%, rgba(253,245,230,1) 100%)' text='Далее направляемся в ресторан "7 небо"' address='ул. Мельникайте, 103а' imgSrc='/images/7Sky.png' time='18:30' mainText='Ресторан' />
      </div>
      <Outfits bgColor='#fdf5e6'/>
      <Countdown bgColor='#CECECD' gradient='linear-gradient(356deg, rgba(206,206,205,1) 35%, rgba(253,245,230,1) 100%)'/>
      <SendForm bgColor='#fdf5e6'/>
    </div>
  );
}

export default App;
