import React from 'react'
import styles from "./Outfits.module.css";
import {useRef, useState, useEffect} from "react";
import { useInView } from "motion/react"


const colors1 = ["F1F1F3", "E5E1D8", "CCC8BC", "B6B9BE", "9DA6A3", "696559"];
const colors2 = ["EEE8D8", "DFCFB6", "BD9A7E", "A78466", "837061"];
const colors3 = [  "D5B5B8", "C7B3A8", "BFB197", "85553E"];

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
        
            <div><p>Нам будет очень приятно, если при выборе вечерних нарядов предпочтёте представленные ниже оттенки </p></div>
            <div><table className={styles.table}>
                <tbody>
                <tr>
                    {colors1.map(mapThroughColors)}
                </tr>
                <tr>
                    {colors2.map(mapThroughColors)}
                </tr>
                <tr>
                    {colors3.map(mapThroughColors)}
                </tr>

                </tbody>
            </table>
            </div>
            
           
        </div>
    )};

export default Outfits;
