import { createPortal } from "react-dom"

const Panel = ({
  isOpen,
  children,
  className = "",
  position = "left",
  width = 700,
}) => {
  return createPortal(
    <div className={`panel-container ${isOpen ? "open" : ""} ${className}`}>
      <div className={`panel ${position}`} style={{ width: width }}>
        {isOpen ? children : null}
      </div>
      <div className="backdrop" />
    </div>,
    document.body
  )
}

export default Panel
