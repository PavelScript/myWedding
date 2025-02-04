import {useRef, useState, useEffect} from "react";
import styles from "./SendForm.module.css";
import { useInView } from "motion/react"


const SendForm = ({bgColor}) => {



    const [selected, setSelected] = useState("");
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
            
            <p>Сможете ли вы присутствовать на мероприятии?</p>

           <form>
            <div className={styles.radioGroup}>
                <div className={styles.radioItem1}>
                    <input 
                        type="radio" 
                        id="option1" 
                        name="group1" 
                        value="option1"
                        checked={selected === 'option1'}
                        onChange={(e) => setSelected(e.target.value)}
                    />
                    <label htmlFor="option1">Да</label>
                </div>

                <div className={styles.radioItem2}>
                <input 
                    type="radio" 
                    id="option2" 
                    name="group1" 
                    value="option2"
                    checked={selected === 'option2'}
                    onChange={(e) => setSelected(e.target.value)}
                />
                <label htmlFor="option2">Нет, не смогу</label>
                </div>

                
            </div>
            <button type="submit" className={styles.button}>Отправить</button> 
            </form>
        </div>
    )};

export default SendForm;
