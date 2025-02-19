import React from 'react'
import styles from "./Schedule.module.css";
import {useRef, useState, useEffect} from "react";
import { useInView } from "framer-motion" 

const Schedule = ({bgColor}) => {

    const appearText = useRef(null)
    const isInView = useInView(appearText, { once: true, amount: 0.2 })
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (isInView) {
            setHasAnimated(true);
        }
    }, [isInView, hasAnimated]);
    

    return (
        <div 
            ref={appearText} 
            style={{
                backgroundColor: bgColor,
            }} 
            className={`${styles.container} ${isInView ? styles.visible : ''}`}
        >
            <h3>План мероприятия</h3>
            <div className={`${styles.gridWrapper} ${isInView ? styles.visibleContent : ''}`}>
                <div className={styles.box}><img src={`${process.env.PUBLIC_URL}/images/SVGs/weddingLocation.svg`} loading="lazy" alt="box" /></div>
                <div className={styles.box}><p>Сбор гостей <br></br> 16:00</p> </div>
                <div className={styles.box}><img src={`${process.env.PUBLIC_URL}/images/SVGs/rings.svg`} loading="lazy" alt="box" /></div>
                <div className={styles.box}><p>ЗАГС <br></br> 16:30</p> </div>
                <div className={styles.box}><img src={`${process.env.PUBLIC_URL}/images/SVGs/dinner.png`} loading="lazy" alt="box" /></div>
                <div className={styles.box}><p>Ужин <br></br> 18:00</p> </div>
                <div className={styles.box}><img src={`${process.env.PUBLIC_URL}/images/SVGs/champagne.svg`} loading="lazy" alt="box" /></div>
                <div className={styles.box}><p>Вечеринка <br></br> 20:00</p> </div>
                <div className={styles.box}><img src={`${process.env.PUBLIC_URL}/images/SVGs/cake.png`} loading="lazy" alt="box" /></div>
                <div className={styles.box}><p>Торт <br></br> 21:00</p> </div>
            </div>
            
        </div>
    )};

export default Schedule;
