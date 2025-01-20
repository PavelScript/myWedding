import Header from './components/Header/Header';
import styles from './App.module.css';
import ToGuests from './components/ToGuests/ToGuests';
import Countdown from './components/Countdown/Countdown';



function App() {
  return (
    <div className={styles.app}>
      <Header />
      
      <ToGuests />
      <Countdown />
    </div>
  );
}

export default App;
