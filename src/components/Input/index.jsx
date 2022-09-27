import React from 'react'
import styles from './input.module.css'
 
function Input({ name, classVariant, type, children, onChange=()=>{}}) {
 return (
 
   <>
      <label htmlFor={name}>{children}</label>
     <input role="input" id={name} name={name} type={type} onChange={onChange}/>

    </>
 
 )
}
 
export default Input
