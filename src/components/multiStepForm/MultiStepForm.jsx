import "./multiStepForm.scss"

import Stepper from "../stepper/Stepper"
import FirstStep from "../steps/FirstStep"
import SecondStep from "../steps/SecondStep"
import ThirdStep from "../steps/ThirdStep"

const MultiStepForm = ({ step, steps, handleStepClick }) => {
  const stepComponent = () => {
    switch (step) {
      case 0:
        return <FirstStep />
      case 1:
        return <SecondStep />
      case 2:
        return <ThirdStep />
      default:
        return <FirstStep />
    }
  }
  return (
    <div className="multiStepForm">
      <Stepper
        currentStepNumber={step}
        steps={steps}
        onStepClick={handleStepClick}
      />

      <div className="step">{stepComponent()}</div>
    </div>
  )
}

export default MultiStepForm
