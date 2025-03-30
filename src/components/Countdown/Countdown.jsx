import React, { useState, useEffect } from 'react';



import styles from "./Countdown.module.css";

const moment = require('moment');

const date = new Date("July 22, 2025 16:30:00 GMT+05:00")


function getRemainingTime() {
    const now = new Date()
    const diff = (Date.parse(date) - Date.parse(now))/1000
    const duration = moment.duration(diff, 'seconds')
    const secLeft = duration.seconds();
    const minLeft = duration.minutes();
    const hoursLeft = duration.hours();
    const daysLeft = duration.days();
    const monthsLeft = duration.months();
    

    return {
        months: monthsLeft,
        days: daysLeft, 
        hours: hoursLeft, 
        minutes: minLeft, 
        seconds: secLeft,

    }


}

const Countdown = ({bgColor, fontColor}) => {

    const [time, setTime] = useState(getRemainingTime());// Используем time вместо getRemainingTime
 
    const updateTime = () => {
        setTime(getRemainingTime()); // Обновляем состояние с новым значением
    }

    useEffect(() => {
        const interval = setInterval(() => {updateTime(); 
    

        
       
    }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div  className={`${styles.container}` } style={{backgroundColor: bgColor, color:fontColor}}>
          
            <img className={styles.img} src={`${process.env.PUBLIC_URL}/images/Date_white.png`} loading="lazy" alt="calendar" />
            <p>До нашей свадьбы осталось:</p>
            <div className={styles.containerNumbers}>
                    
                <div className={styles.labelMonths}>Мес</div>
                <div className={styles.labelDays}>Дн</div>
                <div className={styles.labelHours}>Час</div>
                <div className={styles.labelMinutes}>Мин</div>
                <div className={styles.labelSeconds}>Сек</div>

                <div className={styles.valueMonths}>{time.months}</div>
                <div className={styles.valueDays}>{time.days}</div>
                <div className={styles.valueHours}>{time.hours}</div>
                <div className={styles.valueMinutes}>{time.minutes}</div>
                <div className={styles.valueSeconds}>{time.seconds}</div>
                    

            </div>
        </div>
    );
};

export default Countdown;
