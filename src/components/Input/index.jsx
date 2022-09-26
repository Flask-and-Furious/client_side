import React from 'react'
import styles from './input.module.css'
 
function Input({ name, classVariant, type, children, text}) {
 return (
 
   <>
      <label htmlFor={name}>{text}</label>
     <input role="input" id={name} name={name} type={type}/>

    </>
 
 )
}
 
export default Input