import React from "react"
import Stepper from "../stepper/Stepper"
import "./multiStepForm.scss"

const MultiStepForm = ({ currentStep, steps, onStepClick, children }) => {
  const currentChild = React.Children.toArray(children)[currentStep]
  return (
    <div className="multi-step-form">
      <Stepper
        currentStepNumber={currentStep}
        steps={steps}
        onStepClick={onStepClick}
      />
      <div className="step">{currentChild}</div>
    </div>
  )
}

const memoizedComponent = React.memo(MultiStepForm)
export default memoizedComponent
