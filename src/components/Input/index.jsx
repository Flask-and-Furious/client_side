
import React from 'react'
import styles from './input.module.css'
 
function Input({ name, type, children, onChange=()=>{}}) {
 return (
   type=='text' || type=='password' ?
   <>
      
     <input role="input" id={name} name={name} type={type} onChange={onChange} placeholder={children}/> <br />

    </> :
    <>
      <input role="input" id={name} name={name} type={type} onChange={onChange} value={children}/> <br />
    </>
  );
}

export default Input;
