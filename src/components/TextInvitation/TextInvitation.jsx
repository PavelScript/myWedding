import styles from "./TextInvitation.module.css";

 
const Babushka = 
<>
    <h3  className={styles.textMain}>Здравствуй, Бабушка!</h3>
    <p className={styles.textSecondary}>Один день в этом году будет для нас       
    особенным и мы хотим провести его в кругу близких. <br/> 
    Поэтому мы приглашаем Тебя, разделить с нами столь радостный момент! <br/>
    </p><br/><br/>
    <hr className={styles.line}></hr>
</>;
const Jeka = 
<>
    <h3  className={styles.textMain}>Добрый день, Евгений!</h3>
    <p className={styles.textSecondary}>    Один день в этом году будет для нас       
    особенным и мы хотим провести его в кругу близких. <br/> 
    Поэтому мы приглашаем друзей, разделить с нами столь радостный момент! <br/>
    Ждём всех тебя настроением. Просим не дарить нам цветы, так как скоро 
    у нас планируется свадебное путешествие.</p><br/><br/>
    <hr className={styles.line}></hr>
</>;

const Max = 
<>
    <h3  className={styles.textMain}>Добрый день, Максим!</h3>
    <p className={styles.textSecondary}>Один день в этом году будет для нас       
    особенным и мы хотим провести его в кругу близких. <br/> 
    Поэтому мы приглашаем друзей, разделить с нами столь радостный момент! <br/>
    Ждём всех тебя настроением. Просим не дарить нам цветы, так как скоро 
    у нас планируется свадебное путешествие.</p><br/><br/>
    <hr className={styles.line}></hr>
</>;

const Sasha = 
<>
    <h3  className={styles.textMain}>Добрый день, Саша!</h3>
    <p className={styles.textSecondary}>Один день в этом году будет для нас       
    особенным и мы хотим провести его в кругу близких. <br/> 
    Поэтому мы приглашаем друзей, разделить с нами столь радостный момент! <br/>
    Ждём всех тебя настроением. Просим не дарить нам цветы, так как скоро 
    у нас планируется свадебное путешествие.</p><br/><br/>
    <hr className={styles.line}></hr>
</>;


const TEXT_MAP = {
    "/jeka" : Jeka,
    "/max": Max,
    "/sasha": Sasha,
    "/babushka": Babushka
}

const defaultText = <>
        <h3  className={styles.textMain}>Дорогие Гости!</h3>
        <p className={styles.textSecondary}>    Один день в этом году будет для нас       
        особенным и мы хотим провести его в кругу близких.</p> 
        <p className={styles.textSecondary}> 
        Поэтому мы приглашаем Вас, разделить с нами столь радостный момент! </p>
        <p className={styles.textSecondary}>  Ждём всех с хорошим настроением. Просим не дарить нам цветы, так как скоро 
        у нас планируется свадебное путешествие.</p>
        
        <hr className={styles.line}></hr>
        </>;
    
  
    



const TextInvitation = () => {



    return (
        
        <>
        {TEXT_MAP[window.location.pathname.toLocaleLowerCase()] || defaultText}

        </>
        

            
    
    )};

export default TextInvitation;








