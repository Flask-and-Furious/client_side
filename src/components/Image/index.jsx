import React from 'react'
import styles from './image.module.css'
 
function Image({image, altVal}) {
 return (<>
   <img className={styles.myImg} src={image} alt={altVal} width="130" height="350" />
   </>
 )
}
 
export default Image