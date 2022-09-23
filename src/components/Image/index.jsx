import React from 'react'
import styles from './image.module.css'
 
function Image({image}) {
 return (<>
   <img className={styles.myImg} src={image} width="130" height="350" />
   </>
 )
}
 
export default Image