import {useRef, useState, useEffect} from "react";
import styles from "./SendForm.module.css";
import { useInView } from "motion/react"


const SendForm = ({bgColor}) => {

    const [selected, setSelected] = useState("");
    const [submitStatus, setSubmitStatus] = useState(""); // For showing submission status
    const [isSubmitting, setIsSubmitting] = useState(false);
    const appearText = useRef(null)
    const isInView = useInView(appearText)
    const [hasAnimated, setHasAnimated] = useState(false);


    //For Animtaion
    useEffect(() => {
        if (isInView && !hasAnimated) {
            setHasAnimated(true); 
        }
    }, [isInView, hasAnimated]);

    // Handle form submission

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!selected) {
            setSubmitStatus("Пожалуйста, выберите ответ");
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus("");

        try {
            const response = await fetch('/api/rsvp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    willAttend: selected === 'option1'
                })
            });

            if (response.ok) {
                setSubmitStatus("Спасибо за ваш ответ!");
                setSelected(""); // Reset form
            } else {
                setSubmitStatus("Произошла ошибка. Пожалуйста, попробуйте позже.");
            }
        } catch (error) {
            setSubmitStatus("Произошла ошибка. Пожалуйста, попробуйте позже.");
        } finally {
            setIsSubmitting(false);
        }
    };

   return (
        <div ref={appearText} style={{backgroundColor: bgColor}} className={`${styles.container} ${hasAnimated ? styles.visible : ''}`}>
            <p>Сможете ли вы присутствовать на мероприятии?</p>

            <form onSubmit={handleSubmit}>
                <div className={styles.radioGroup}>
                    <div className={styles.radioItem1}>
                        <input 
                            type="radio" 
                            id="option1" 
                            name="group1" 
                            value="option1"
                            checked={selected === 'option1'}
                            onChange={(e) => setSelected(e.target.value)}
                            disabled={isSubmitting}
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
                            disabled={isSubmitting}
                        />
                        <label htmlFor="option2">Нет, не смогу</label>
                    </div>
                </div>

                {submitStatus && (
                    <div className={styles.statusMessage}>
                        <p className={styles.submitText}>{submitStatus}</p>
                    </div>
                )}

                <button 
                    type="submit" 
                    className={styles.button}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Отправка...' : 'Отправить'}
                </button>
            </form>
        </div>
    );
};

export default SendForm;
