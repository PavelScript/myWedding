import React from 'react'
import styles from "./ToGuests.module.css";




const ToGuests = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.textMain}>Дорогие Гости!</h3>
            <p className={styles.textSecondary}>Один день в этом году будет для нас особенным и мы хотим провести его в кругу близких. <br/> Поэтому мы приглашаем Вас, разделить с нами столь радостный момент! <br/>
            Ждём всех с хорошим настроением. Просим не дарить нам цветы, так как скоро у нас планируется свадебное путешествие.</p>
            
        </div>
    )};

export default ToGuests;

