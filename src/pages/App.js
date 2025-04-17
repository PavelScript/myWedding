import Header from '../components/Header/Header';
import styles from './App.module.css';
import ToGuests from '../components/ToGuests/ToGuests';
import Countdown from '../components/Countdown/Countdown';
import Outfits from '../components/Outfits/Outfits';
import Schedule from '../components/Schedule/Schedule';
import Place from '../components/Place/Place';
import SendForm from '../components/SendForm/SendForm';
import Wishes from '../components/Wishes/Wishes';
import React, { useRef, useState } from 'react';




function App() {

  const audioRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleConfirm = () => {
    setIsModalOpen(false);
    audioRef.current.play();
  };

  const handleReject = () => {
    setIsModalOpen(false);
  };


  return (
    <div className={styles.app}>
    <audio ref={audioRef} src="/SweetHeatLightning.mp3" loop />
    {isModalOpen && (
        <div className={styles.modalStyle}>
          <p style={{color:'rgba(57, 73, 114, 1)', textAlign: 'center'}}>Хотите включить музыку на странице?</p>
          <div className={styles.buttons}>
            <button className={styles.yesButton} onClick={handleConfirm}>Да</button>
            <button className={styles.noButton} onClick={handleReject}>Нет</button>
          </div>
        </div>
      )}
      <Header />
      <ToGuests bgColor='rgba(255,255,255,1)'/>
      <Schedule bgColor="rgba(57, 73, 114, 1)"/>
      <div className={styles.rowContainerPlaces}>
        <Place bgColor='rgba(255,255,255,1)' fontColor=' #394972' text='Сбор гостей возле ЗАГС' address='ул. ​Малыгина, 85' imgSrc='/images/gatheringPoint.png' time='16:00' mainText='Место встречи' /> 
        <Place bgColor='rgba(57, 73, 114, 1)' fontColor='white' text='Далее направляемся в ресторан "Piano Bar"' address='ул. Республики, 33' imgSrc='/images/piano.jpg' time='18:00' mainText='Ресторан' />
      </div>
      <Outfits bgColor='rgba(255,255,255,1)'/>
      <Countdown bgColor='rgba(57, 73, 114, 1)' fontColor='white'/>
      <SendForm bgColor='rgba(255,255,255,1)'/>
      <Wishes bgColor='rgba(57, 73, 114, 1)'/>
      
      
    </div>
  );

  
}



export default App;
