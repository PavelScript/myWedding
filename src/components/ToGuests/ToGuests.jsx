import { useRef, useState, useEffect } from "react";
import styles from "./ToGuests.module.css";
import { useInView } from "motion/react";
import texts from "./texts";

const TEXT_MAP_GREETING = {
  "/ruslanadelina": texts.RuslanAdelina.textH1,
  "/maximvalentina": texts.MaximValentina.textH1,
  "/alexanderolga": texts.AlexanderOlga.textH1,
  "/roditeli": texts.Roditeli.textH1,
  "/dmitriy": texts.Dima.textH1,
  "/yurianastasia": texts.YuraNastya.textH1,
  "/babushkatanya": texts.BabushkaTanya.textH1,
  "/victoranastasia": texts.VictorAnastasia.textH1,
  "/evgeniy": texts.Zheka.textH1,
  "/borisdinara": texts.BorisDinara.textH1,
  "/alexey": texts.Alexey.textH1,
  "/anatoliy": texts.Anatoliy.textH1,
  "/pavelolga": texts.PavelOlga.textH1,
  "/anastasiavalmir": texts.AnastasiaValmir.textH1,
  "/igorvera": texts.VeraIgor.textH1,
  "/dmitriyanastasia": texts.DmitriyAnastasia.textH1,
  "/ivananastasia": texts.IvanAnastasia.textH1,
  "/denissvetlana": texts.DenisSvetlana.textH1,
  "/stasyulia": texts.StasYuliaEkaterinaAlexandra.textH1,
  "/alexandergalina": texts.AlexanderGalina.textH1,
  "/vladislavanastasia": texts.VladislavAnastasia.textH1,
  "/": texts.defaultText.textH1,
};
const TEXT_MAP_GREETING_NAME = {
  "/ruslanadelina": texts.RuslanAdelina.textH2,
  "/maximvalentina": texts.MaximValentina.textH2,
  "/alexanderolga": texts.AlexanderOlga.textH2,
  "/roditeli": texts.Roditeli.textH2,
  "/dmitriy": texts.Dima.textH2,
  "/yurianastasia": texts.YuraNastya.textH2,
  "/babushkatanya": texts.BabushkaTanya.textH2,
  "/victoranastasia": texts.VictorAnastasia.textH2,
  "/evgeniy": texts.Zheka.textH2,
  "/borisdinara": texts.BorisDinara.textH2,
  "/alexey": texts.Alexey.textH2,
  "/anatoliy": texts.Anatoliy.textH2,
  "/pavelolga": texts.PavelOlga.textH2,
  "/anastasiavalmir": texts.AnastasiaValmir.textH2,
  "/igorvera": texts.VeraIgor.textH2,
  "/dmitriyanastasia": texts.DmitriyAnastasia.textH2,
  "/ivananastasia": texts.IvanAnastasia.textH2,
  "/denissvetlana": texts.DenisSvetlana.textH2,
  "/stasyulia": texts.StasYuliaEkaterinaAlexandra.textH2,
  "/alexandergalina": texts.AlexanderGalina.textH2,
  "/vladislavanastasia": texts.VladislavAnastasia.textH2,
  "/": texts.defaultText.textH2,
};

const ToGuests = ({ bgColor, gradient }) => {
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
      style={{ backgroundColor: bgColor, background: gradient }}
      className={`${styles.container} ${hasAnimated ? styles.visible : ""}`}
    >
      <div className={styles.greetingContainer}>
        <h2 className={styles.greeting}>
          {TEXT_MAP_GREETING[window.location.pathname.toLocaleLowerCase()]}
        </h2>
        <h2 className={styles.greeting}>
          {TEXT_MAP_GREETING_NAME[window.location.pathname.toLocaleLowerCase()]}
        </h2>
        <p className={styles.text}>
          Этот день станет началом нашей долгой и счастливой семейной жизни.
          Разделите с нами эту радость, мы приглашаем Вас на торжество,
          посвященное нашей свадьбе.
        </p>
        <p className={styles.text}>
          Приходите стать частью нашего большого дня, принести с собой тепло,
          улыбки и добрые пожелания. Ваше присутствие сделает этот момент еще
          более особенным!
        </p>
        <img
          src={`${process.env.PUBLIC_URL}/images/weddingOrnaments.png`}
          loading="lazy"
          className={styles.photo}
          alt="Devider"
        />
        {/* <img src={`${process.env.PUBLIC_URL}/images/cake.webp`} className={styles.cake} loading="lazy" alt="Cake" /> */}
      </div>
    </div>
  );
};

export default ToGuests;
