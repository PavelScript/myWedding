import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Calendar from './components/Calendar/Calendar';
import styles from './App.module.css';
import ToGuests from './components/ToGuests/ToGuests';



function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <Calendar />
      <ToGuests />
    </div>
  );
}

export default App;
