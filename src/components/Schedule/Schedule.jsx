import React from 'react'
import styles from "./Schedule.module.css";
import {useRef, useState, useEffect} from "react";
import { useInView } from "framer-motion" 

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
            <h3>План мероприятия</h3>
            <div className={`${styles.gridWrapper} ${hasAnimated ? styles.visibleContent : ''}`}>
                <div className={styles.rings}><img src={`${process.env.PUBLIC_URL}/images/SVGs/weddingLocation.svg`} alt="rings" className={styles.rings} /></div>
                <div className={styles.rings}><p>Сбор гостей <br></br> 16:00</p> </div>
                <div className={styles.rings}><img src={`${process.env.PUBLIC_URL}/images/SVGs/rings.svg`} alt="rings" className={styles.rings} /></div>
                <div className={styles.rings}><p>ЗАГС <br></br> 16:30</p> </div>
                <div className={styles.rings}><img src={`${process.env.PUBLIC_URL}/images/SVGs/dinner.png`} alt="rings" className={styles.rings} /></div>
                <div className={styles.rings}><p>Ужин <br></br> 18:00</p> </div>
                <div className={styles.rings}><img src={`${process.env.PUBLIC_URL}/images/SVGs/champagne.svg`} alt="rings" className={styles.rings} /></div>
                <div className={styles.rings}><p>Вечеринка <br></br> 20:00</p> </div>
                <div className={styles.rings}><img src={`${process.env.PUBLIC_URL}/images/SVGs/cake.png`} alt="rings" className={styles.rings} /></div>
                <div className={styles.rings}><p>Торт <br></br> 21:00</p> </div>

            {/* <p>Расписание мероприятия</p>
            <div className={styles.timingContainer}>
                <img src={`${process.env.PUBLIC_URL}/images/SVGs/rings.svg`} alt="rings" className={styles.rings} />
                <img src={`${process.env.PUBLIC_URL}/images/SVGs/weddingCake.svg`} alt="rings" className={styles.rings} />
                <img src={`${process.env.PUBLIC_URL}/images/SVGs/cake.png`} alt="rings" className={styles.rings} />
                <img src={`${process.env.PUBLIC_URL}/images/SVGs/champagne.png`} alt="rings" className={styles.rings} />
               
                      <div className={styles.vl}></div>
                      <p className={styles.metting}>Сбор гостей 16:00</p> 
                      <p className={styles.ceremony}> ЗАГС 16:30</p> 
                      <p className={styles.dinner}> Ужин 18:30</p> 
                      <p className={styles.party}> Вечеринка 20:00</p> 
                      <p className={styles.cake}> Торт 21:30</p> 

                </div> */}
            </div>
            
        </div>
    )};

export default Schedule;
