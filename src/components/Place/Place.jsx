import React from 'react'
import styles from "./Place.module.css";
import {useRef, useState, useEffect} from "react";
import { useInView } from "framer-motion" 

const Place = ({bgColor, fontColor, imgSrc, address, text, time, mainText,gradient=bgColor}) => {

    const appearText = useRef(null)
    const isInView = useInView(appearText)
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (isInView && !hasAnimated) {
            setHasAnimated(true); // Устанавливаем состояние, когда анимация завершена
        }
    }, [isInView, hasAnimated]);
    

    return (
        <div ref={appearText} style={{backgroundColor: bgColor, background: gradient, color: fontColor}} className={`${styles.container} ${hasAnimated ? styles.visible : ''}`}>
            <h3>{mainText}</h3>
          
                <div className={styles.point}><img src={`${process.env.PUBLIC_URL} ${imgSrc}`} loading="lazy" alt="gatheringPoint" className={styles.rings} /></div>
                <div><p style={{color:fontColor}}>{text}<br></br>{address}<br></br> {time}</p> </div>
             
         
            
        </div>
    )};

export default Place;
