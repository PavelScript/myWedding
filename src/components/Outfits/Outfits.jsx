import React from 'react'
import styles from "./Outfits.module.css";
import {useRef, useState, useEffect} from "react";
import { useInView } from "motion/react"


const colors = ["BBBAB5", "D19A5A", "EFECE5", "DEBEA7", "B7856A"];

const mapThroughColors = (color) => {
    return (<td key={color} bgcolor = {color}></td>)
}

const Outfits = ({bgColor}) => {

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
        
            <div><p>Просим вас придерживаться следующих цветов в ваших нарядах</p></div>
            <div><table className={styles.table}>
                <tbody>
                <tr>
                    {colors.map(mapThroughColors)}
                </tr>
                </tbody>
            </table>
            </div>
            
           
        </div>
    )};

export default Outfits;
