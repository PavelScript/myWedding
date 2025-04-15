import {useRef, useState, useEffect} from "react";
import styles from "./ToGuests.module.css";
import { useInView } from "motion/react"
import texts from './texts';

 
    const TEXT_MAP_GREETING1 = {
        "/ruslanadelina" : texts.RuslanAdelina.textH1,
        "/maximvalentina" : texts.MaximValentina.textH1,
        "/alexanderolga" : texts.AlexanderOlga.textH1,
        "/roditeli" : texts.Roditeli.textH1,

        "/": texts.defaultText.textH1
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
                <h2 className={styles.greeting}>Дорогие,</h2>
                <h2 className={styles.greeting}>{TEXT_MAP_GREETING1[window.location.pathname.toLocaleLowerCase()] }</h2>
                <p className={styles.text}>Этот день станет началом нашей долгой и счастливой семейной жизни. Разделите с нами эту радость, мы приглашаем Вас на торжество, посвященное нашей свадьбе.</p> 
                <p className={styles.text}>Приходите стать частью нашего большого дня, принести с собой тепло, улыбки и добрые пожелания. Ваше присутствие сделает этот момент еще более особенным!</p> 
                <img src={`${process.env.PUBLIC_URL}/images/textDivider.webp`} loading="lazy" className={styles.photo} alt="Devider" /> 
                {/* <img src={`${process.env.PUBLIC_URL}/images/cake.webp`} className={styles.cake} loading="lazy" alt="Cake" /> */}
                 

            </div>
        </div>
    )};

export default ToGuests;








