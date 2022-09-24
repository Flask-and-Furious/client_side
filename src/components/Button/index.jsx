import React from "react"

function Button ({ text, isDisabled }) {

    if (isDisabled) {
        console.log('disabled is true');
        document.querySelector('.btn').disabled = true
    }

    return (
        <button className="btn">{text}</button>
    )
}

export default Button
