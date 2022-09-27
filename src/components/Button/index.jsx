import React from "react"

import styles from "./index.module.css"

function Button ({ text, isDisabled, cssClass }) {

    return (
        <button className={styles[`${cssClass}`]} disabled={isDisabled}>{text}</button>
    )
}

export default Button
