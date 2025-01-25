import React from 'react'
import styles from "./Schedule.module.css";
import {useRef, useState, useEffect} from "react";
import { useInView } from "motion/react"







const Schedule = () => {

    const appearText = useRef(null)
    const isInView = useInView(appearText)
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (isInView && !hasAnimated) {
            setHasAnimated(true); // Устанавливаем состояние, когда анимация завершена
        }
    }, [isInView, hasAnimated]);
    

    return (
        <div ref={appearText} className={`${styles.container} ${hasAnimated ? styles.visible : ''}`}>
        
            <p>Расписание мероприятия</p>
            <div className={styles.timingContainer}>
                <img src={`${process.env.PUBLIC_URL}/images/SVGs/rings.svg`} alt="rings" className={styles.rings} />
                      <div className={styles.vl}></div>
            </div>
            
        </div>
    )};

export default Schedule;
