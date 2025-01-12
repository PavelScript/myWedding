import React from 'react'
import styles from "./Main.module.css";
import Lovers from "./lovers.jpg";

const Main = () => {
    return (
        <div className={styles.main}>
            <img src={Lovers} className={styles.photo} alt="BrideAndGroom" />
        </div>
    )};

export default Main;
