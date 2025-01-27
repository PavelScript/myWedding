import React from 'react'
import styles from "./Outfits.module.css";
import {useRef, useState, useEffect} from "react";
import { useInView } from "motion/react"


const colors = ["#E2EEEC", "#8AAAA5", "#CABD9A", "#A5956D", "#CFDBDA"];

const mapThroughColors = (color) => {
    return (<td key={color} bgcolor = {color}></td>)
}

const Outfits = () => {

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
        
            <p>Просим вас придерживаться представленных на фото стилей и цветов в ваших нарядах.</p>
            <table>
                <tbody>
                <tr>
                    {colors.map(mapThroughColors)}
                </tr>
                </tbody>
            </table>

            <p>Ниже будут примеры нарядов</p>
            
           
        </div>
    )};

export default Outfits;
