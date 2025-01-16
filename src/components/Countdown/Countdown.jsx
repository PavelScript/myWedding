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

    return ` ${monthsLeft} мес, ${daysLeft} дн, ${hoursLeft} ч, ${minLeft} мин, ${secLeft} сек`;

}





const Countdown = () => {
    const [time, setTime] = useState(getRemainingTime()); // Используем time вместо getRemainingTime

    const updateTime = () => {
        setTime(getRemainingTime()); // Обновляем состояние с новым значением
    }

    useEffect(() => {
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.container}>
            <h1>{time}</h1> {/* Используем состояние time для отображения */}
        </div>
    );
};

export default Countdown;
