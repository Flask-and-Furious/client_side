import React from 'react'
import styles from './index.module.css'


function Loader({ cssClass}) {
  return (
    <div className={styles[`${cssClass}`]}>Loader</div>
  )
}

export default Loader
