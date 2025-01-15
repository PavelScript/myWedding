import React from 'react'
import styles from "./Countdown.module.css";


const now = new Date()
const date = new Date("July 22, 2025 16:30:00 GMT+05:00")

function getRemainingTime() {
    const diff = (Date.parse(date) - Date.parse(now))/1000
    const secLeft = Math.floor(diff%60)
    const minLeft = Math.floor((diff/60)%60)
    const hoursLeft = Math.floor((diff/3600)%24)
    const daysLeft = Math.floor(diff/86400%30)
    const monthsLeft = Math.floor(diff/2592000)


    return ` ${monthsLeft} мес, ${daysLeft} дн, ${hoursLeft} ч, ${minLeft} мин, ${secLeft} сек`;

}


const Countdown = () => {
    return (
        <div className={styles.container}>
           <h1>{getRemainingTime()}</h1>
        </div>
    )};

export default Countdown;
