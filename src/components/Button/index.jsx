import React from "react"

function Button ({ text, isDisabled }) {

    return (
        <button className="btn" disabled={isDisabled}>{text}</button>
    )
}

export default Button
