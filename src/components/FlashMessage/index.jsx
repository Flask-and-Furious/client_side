import React from 'react'

function FlashMessage({ style, text }) {
  return (
    <div style={style} role="flashMessage">{text}</div>
  )
}

export default FlashMessage
