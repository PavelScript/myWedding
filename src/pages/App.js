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
      <ToGuests bgColor='rgba(255,255,255,1)'/>
      <Schedule bgColor="rgba(57, 73, 114, 1)"/>
      <div className={styles.rowContainerPlaces}>
        <Place bgColor='rgba(255,255,255,1)' text='Сбор гостей возле ЗАГС' address='ул. ​Малыгина, 85' imgSrc='/images/gatheringPoint.png' time='16:00' mainText='Место встречи' /> 
        <Place bgColor='rgba(57, 73, 114, 1)' fontColor='white' text='Далее направляемся в ресторан "7 небо"' address='ул. Мельникайте, 103а' imgSrc='/images/7Sky.png' time='18:30' mainText='Ресторан' />
      </div>
      <Outfits bgColor='rgba(255,255,255,1)'/>
      <Countdown bgColor='rgba(57, 73, 114, 1)' fontColor='white'/>
      <SendForm bgColor='rgba(255,255,255,1)'/>
    </div>
  );
}

export default App;
