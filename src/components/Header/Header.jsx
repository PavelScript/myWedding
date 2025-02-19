import React from 'react'
import styles from "./Header.module.css";



const Header = () => {
    return (
        <div className={styles.main}>
            <div className={styles.polaroidContainer}>
                <img src={`${process.env.PUBLIC_URL}/images/lovers.jpg`} className={styles.photo} alt="BrideAndGroom" />
                <img src={`${process.env.PUBLIC_URL}/images/tr556.png`} className={styles.polaroid} alt="Polaroid" />
                <div className={styles.dateContainer}>
                <p id={styles.date} className={styles.date}>22 июля, 2025 г.</p>
                <p id={styles.date} className={styles.date2}>16:30</p>
            
                </div>
            </div>
            <div className={styles.text}>
                <p id={styles.pavel} className={styles.textNormal}>Павел</p>
                <p id={styles.vera} className={styles.textNormal}>& Вера</p>
                
            </div>
            
        
        </div>
    )};

export default Header;
