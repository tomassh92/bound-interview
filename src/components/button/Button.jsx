import React from "react"
import "./button.scss"

const Button = React.memo(
  ({ type, onClick, className = "", children, ...props }) => {
    return (
      <button
        className={`btn ${type} ${className}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    )
  }
)

export default Button
