import React from "react";

import styles from './index.module.css'

function Subtitle({ subtitle, cssClass }) {
  return (
    <>
      <h2 className={styles[`${cssClass}`]}>{subtitle}</h2>
    </>
  );
}

export default Subtitle;
