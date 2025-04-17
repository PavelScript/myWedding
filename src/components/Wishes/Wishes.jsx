import { useRef, useState, useEffect } from "react";
import styles from "./Wishes.module.css";
import { useInView } from "motion/react";

const Wishes = ({ bgColor, gradient }) => {
  const appearText = useRef(null);
  const isInView = useInView(appearText);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true); // Устанавливаем состояние, когда анимация завершена
    }
  }, [isInView, hasAnimated]);

  return (
    <div
      ref={appearText}
      style={{ backgroundColor: bgColor }}
      className={`${styles.container} ${hasAnimated ? styles.visible : ""}`}
    >
      <div className={styles.greetingContainer}>
        <h2 className={styles.greeting}>Особенные пожелания</h2>

        <p className={styles.text}>
          Мы очень ценим Вашу заботу и внимание! Если вы задумываетесь о подарке, мы будем рады,  если Вы сделаете вклад в наш семеный бюджет. Это поможет нам осуществить мечты.
        </p>



        <p className={styles.text}>С уважением и любовью</p>

        <h2 className={styles.greeting}>Павел и Вера 🤍</h2>
      </div>    
    </div>
  );
};

export default Wishes;
