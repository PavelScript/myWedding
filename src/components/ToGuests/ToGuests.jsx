
import {useRef, useState, useEffect} from "react";
import styles from "./ToGuests.module.css";
import { useInView } from "motion/react"
import TextInvitation from "../TextInvitation/TextInvitation";

  
    
    



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

            <TextInvitation  />


        

            
        </div>
    )};

export default ToGuests;








