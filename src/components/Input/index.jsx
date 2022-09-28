
import React from 'react'
import styles from './input.module.css'
 
function Input({ name, type, children, onChange=()=>{}, min, max}) {
 return (
   type=='text' || type=='password' || type=='email' ?
   <>
      
     <input required role="input" id={name} name={name} type={type} onChange={onChange} placeholder={children} minLength={min} maxLength={max}/> <br />

    </> :
    <>
      <input required role="input" id={name} name={name} type={type} onChange={onChange} value={children}/> <br />
    </>
  );
}

export default Input;
