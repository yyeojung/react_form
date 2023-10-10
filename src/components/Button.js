import React from 'react'

function Button(props) {
  return (
    <button
        className={`${props.btnColor} ${props.margin}`}
        type={props.type || 'button'}
        onClick={props.onClick}
    >
        {props.children}
    </button>
  )
}

export default Button