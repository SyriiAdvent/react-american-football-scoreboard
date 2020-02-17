import React from 'react'

const Button = props => {
  return (
    <button className={props.cn} onClick={props.type}>{props.children}</button>
  )
}

export default Button