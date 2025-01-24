import React from 'react'
import {useRef, useState, useEffect} from "react";
import styles from "./ToGuests.module.css";
import { useInView } from "motion/react"

const ToGuests = () => {

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
            <h3  className={styles.textMain}>Дорогие Гости!</h3>
            <p className={styles.textSecondary}>Один день в этом году будет для нас       
            особенным и мы хотим провести его в кругу близких. <br/> 
            Поэтому мы приглашаем Вас, разделить с нами столь радостный момент! <br/>
            Ждём всех с хорошим настроением. Просим не дарить нам цветы, так как скоро 
            у нас планируется свадебное путешествие.</p><br/><br/>
            <hr className={styles.line}></hr>

            
        </div>
    )};

export default ToGuests;








