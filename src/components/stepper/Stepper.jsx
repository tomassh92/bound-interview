import "./stepper.scss"
import React from "react"
import { MdChevronRight, MdDone } from "react-icons/md"

const Stepper = ({ steps, currentStepNumber, onStepClick }) => {
  const stepsJSX = steps.map((step, index) => {
    const isSelected = index === currentStepNumber
    const isCompleted = currentStepNumber > index
    return (
      <div
        className={`step-wrapper ${isSelected ? "selected" : "disabled"}`}
        key={index}
        onClick={isCompleted ? onStepClick(index) : () => {}}
      >
        <div className="step-number">
          {isCompleted ? <MdDone /> : index + 1}
        </div>
        <div className="step-description">{step}</div>
        {index !== steps.size - 1 && <MdChevronRight className="divider" />}
      </div>
    )
  })
  return <div className="stepper-wrapper">{stepsJSX}</div>
}

const memoizedComponent = React.memo(Stepper)
export default memoizedComponent
