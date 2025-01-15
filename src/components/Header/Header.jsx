import React from 'react'
import styles from "./Header.module.css";
import Lovers from "./lovers.jpg";

const Header = () => {
    return (
        <div className={styles.main}>
            <img src={Lovers} className={styles.photo} alt="BrideAndGroom" />
            <div className={styles.text}>
                <p id={styles.pavel} className={styles.textNormal}>Павел</p>
                <p id={styles.and} className={styles.textCursive}>and</p>
                <p id={styles.vera} className={styles.textNormal}>Вера</p>
            </div>
        </div>
    )};

export default Header;
