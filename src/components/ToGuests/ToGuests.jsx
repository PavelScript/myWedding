
import {useRef, useState, useEffect} from "react";
import styles from "./ToGuests.module.css";
import { useInView } from "motion/react"
import texts from './texts';

 
    const TEXT_MAP = {
        "/ruslanadelina" : texts.RuslanAdelina.textH
    }
    
    const defaultText = <><h3  className={styles.textMain}>Дорогие Гости!</h3>
            <p className={styles.textSecondary}>Один день в этом году будет для нас       
            особенным и мы хотим провести его в кругу близких. </p> 
            <p className={styles.textSecondary}>
            Поэтому мы приглашаем Вас, разделить с нами столь радостный момент! </p>
            <p className={styles.textSecondary}>
            Ждём всех с хорошим настроением. Просим не дарить нам цветы, так как скоро 
            у нас планируется свадебное путешествие. </p>
    
            </>;
    
    



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

            {TEXT_MAP[window.location.pathname.toLocaleLowerCase()] || defaultText}
        </div>
    )};

export default ToGuests;








