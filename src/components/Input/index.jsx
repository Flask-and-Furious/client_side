import React from 'react'
import styles from './input.module.css'
 
function Input({ name, classVariant, text}) {
 return (
 
   <>
      <label htmlFor={name}>{text}</label>
     <input role="input" className={styles[`${classVariant}`]} id={name}/>
    </>
 
 )
}
 
export default Input