import React from 'react'
import styles from './image.module.css'
 
function Image({image, altVal, cssClass}) {
 return (
    <img className={styles[`${cssClass}`]} src={image} alt={altVal} role={"img"}/>
 )
}
 
export default Image