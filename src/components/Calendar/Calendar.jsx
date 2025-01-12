import React from 'react'
import styles from "./Calendar.module.css";
import Date from "./Date.png";



const Calendar = () => {
    return (
        <div className={styles.calendar}>
      
            <img className={styles.img} src={Date} alt="calendar" />
        </div>
    )};

export default Calendar;

