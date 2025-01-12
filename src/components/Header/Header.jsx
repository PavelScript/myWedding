import React from 'react'
import styles from "./Header.module.css";



const Header = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.textNormal}>Свадьба</h1>
            <h1 className={styles.textNormal}>Павла</h1>
            <h1 className={styles.textCursive}>and</h1>
            <h1 className={styles.textNormal}>Веры</h1>
        </div>
    )};

export default Header;

