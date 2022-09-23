import React from 'react'
import styles from './input.module.css'
 
function Input({ classVariant}) {
 return (
 
   <>
      <label htmlFor="">textLable</label>
     <input role="input" className={styles[`${classVariant}`]} id={name}/>
    </>
 
 )
}
 
export default Input