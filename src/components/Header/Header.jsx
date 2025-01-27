import React from 'react'
import styles from "./Header.module.css";



const Header = () => {
    return (
        <div className={styles.main}>
            <img src={`${process.env.PUBLIC_URL}/images/lovers.jpg`} className={styles.photo} alt="BrideAndGroom" />
            <div className={styles.text}>
                <p id={styles.pavel} className={styles.textNormal}>Павел</p>
                <p id={styles.and} className={styles.textCursive}>&</p>
                <p id={styles.vera} className={styles.textNormal}>Вера</p>
                <p id={styles.date} className={styles.date}>22|07|25</p>
            </div>
        
        </div>
    )};

export default Header;
