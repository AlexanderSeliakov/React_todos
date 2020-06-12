import React from 'react'

import './Button.css'

export default props => {

  return (
    <button
      type={props.type}
      className={`button button-${props.type}`}
      onClick={props.onClick}
      style={{
      width: props.width,
      height: props.height,
      padding: props.padding
    }}>
      {props.children}
    </button>
  )
}