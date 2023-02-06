import "./multiStepForm.scss"
import React from "react"
import Stepper from "../stepper/Stepper"

const MultiStepForm = ({ step, steps, onStepClick, children }) => {
  const currentChild = React.Children.toArray(children)[step]

  return (
    <div className="multiStepForm">
      <Stepper
        currentStepNumber={step}
        steps={steps}
        onStepClick={onStepClick}
      />
      <div className="step">{currentChild}</div>
    </div>
  )
}

export default MultiStepForm
