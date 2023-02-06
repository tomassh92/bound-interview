import React from "react"
import "./button.scss"

const Button = ({ type, onClick, className = "", children, ...props }) => {
  return (
    <button className={`btn ${type} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

const memoizedComponent = React.memo(Button)
export default memoizedComponent
