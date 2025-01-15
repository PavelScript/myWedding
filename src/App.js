import Header from './components/Header/Header';
import Calendar from './components/Calendar/Calendar';
import styles from './App.module.css';
import ToGuests from './components/ToGuests/ToGuests';
import Countdown from './components/Countdown/Countdown';



function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Calendar />
      <Countdown />
      <ToGuests />
    </div>
  );
}

export default App;
