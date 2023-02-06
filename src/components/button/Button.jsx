import cn from "classnames"
import React from "react"
import "./button.scss"

const Button = React.memo(
  ({ type, onClick, className, children, ...props }) => {
    const btnClasses = cn("btn", type, className)
    return (
      <button className={btnClasses} onClick={onClick} {...props}>
        {children}
      </button>
    )
  }
)

export default Button
