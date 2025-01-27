import React from 'react'
import styles from "./Place.module.css";
import {useRef, useState, useEffect} from "react";
import { useInView } from "framer-motion" 

const Place = ({bgColor}) => {

    const appearText = useRef(null)
    const isInView = useInView(appearText)
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (isInView && !hasAnimated) {
            setHasAnimated(true); // Устанавливаем состояние, когда анимация завершена
        }
    }, [isInView, hasAnimated]);
    

    return (
        <div ref={appearText} style={{backgroundColor: bgColor}} className={`${styles.container} ${hasAnimated ? styles.visible : ''}`}>
            <h3>Место встречи</h3>
          
                <div className={styles.point}><img src={`${process.env.PUBLIC_URL}/images/gatheringPoint.png`} alt="gatheringPoint" className={styles.rings} /></div>
                <div><p>Сбор гостей возле ЗАГС <br></br>ул. ​Малыгина, 85<br></br> 16:00</p> </div>
             
         
            
        </div>
    )};

export default Place;
