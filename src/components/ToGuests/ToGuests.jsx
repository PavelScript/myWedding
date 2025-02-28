
import {useRef, useState, useEffect} from "react";
import styles from "./ToGuests.module.css";
import { useInView } from "motion/react"
import texts from './texts';

 
    const TEXT_MAP_GREETING1 = {
        "/ruslanadelina" : texts.RuslanAdelina.textH1,
        "/": texts.defaultText.textH1
    }

    const TEXT_MAP_GREETING2 = {
        "/ruslanadelina" : texts.RuslanAdelina.textH2,
        "/": texts.defaultText.textH2
    }

    const TEXT_MAP_PARAG1 = {
        "/ruslanadelina" : texts.RuslanAdelina.textP1,
        "/": texts.defaultText.textP1

    }

    const TEXT_MAP_PARAG2 = {
        "/ruslanadelina" : texts.RuslanAdelina.textP2,
        "/": texts.defaultText.textP2

    }

    const TEXT_MAP_PARAG3 = {
        "/ruslanadelina" : texts.RuslanAdelina.textP2,
        "/": texts.defaultText.textP2

    }

const ToGuests = ({bgColor, gradient}) => {

    const appearText = useRef(null)
    const isInView = useInView(appearText)
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (isInView && !hasAnimated) {
            setHasAnimated(true); // Устанавливаем состояние, когда анимация завершена
        }
    }, [isInView, hasAnimated]);


    
    return (
        <div ref={appearText} style={{backgroundColor: bgColor, background: gradient}}  className={`${styles.container} ${hasAnimated ? styles.visible : ''}`}>
            <div className={styles.greetingContainer}>
            <h2 className={styles.greeting}>{TEXT_MAP_GREETING1[window.location.pathname.toLocaleLowerCase()] }</h2>
            {window.location.pathname.toLocaleLowerCase() === "/"
            ? null 
            : <h2 className={styles.greeting}>{TEXT_MAP_GREETING2[window.location.pathname.toLocaleLowerCase()]}</h2>}
            <p className={styles.text}>{TEXT_MAP_PARAG1[window.location.pathname.toLocaleLowerCase()]}</p> 
            <p className={styles.text}>{TEXT_MAP_PARAG2[window.location.pathname.toLocaleLowerCase()]}</p> 
            <p className={styles.text}>{TEXT_MAP_PARAG3[window.location.pathname.toLocaleLowerCase()]}</p> 
            </div>
        </div>
    )};

export default ToGuests;








