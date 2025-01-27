import React from 'react'
import styles from "./Restaurant.module.css";
import {useRef, useState, useEffect} from "react";
import { useInView } from "framer-motion" 

const Restaurant = ({bgColor}) => {

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
            <h3>Далее направляемся в</h3>
          
                <div className={styles.point}><img src={`${process.env.PUBLIC_URL}/images/7Sky.png`} alt="gatheringPoint" className={styles.rings} /></div>
                <div><p>Ресторан 7ое небо <br></br>ул. Мельникайте, 103а <br></br> 18:30</p> </div>
             
         
            
        </div>
    )};

export default Restaurant;
