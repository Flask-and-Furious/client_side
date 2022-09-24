import React from "react"

function Button ({ text, isDisabled }) {

    if (isDisabled) {
        document.querySelector('.btn').disabled = true
    }

    return (
        <button className="btn">{text}</button>
    )
}

export default Button
