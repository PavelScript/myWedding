import React from 'react'
import styles from './Button.module.css'

const Button = ({text,color}) => {
  return (
    // <button className={`${styles.button} ${styles[color]}`}>{text}</button>
    <button className={`${styles.button}`} style={{backgroundColor:color}}> {text}</button>
  )
}

export default Button