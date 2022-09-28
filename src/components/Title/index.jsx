import React from "react";
import styles from './index.module.css'

function Title({ title, cssClass }) {
  return (
    <>
      <h1 className={styles[`${cssClass}`]} role="heading">{title}</h1>
    </>
  );
}

export default Title;
