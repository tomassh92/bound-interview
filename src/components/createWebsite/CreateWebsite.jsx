import { useCallback, useContext, useMemo } from "react"
import { MdClose } from "react-icons/md"
import { FormContext } from "context/FormContext"
import {
  getFormattedFormState,
  getStepLabels,
  isStepValid,
} from "utils/formHelper"
import Button from "components/button/Button"
import MultiStepForm from "components/multiStepForm/MultiStepForm"
import FirstStep from "components/steps/FirstStep"
import SecondStep from "components/steps/SecondStep"
import ThirdStep from "components/steps/ThirdStep"
import "./createWebsite.scss"

const CreateWebsite = ({ togglePanel }) => {
  const { currentStep, setCurrentStep, formState, resetState } =
    useContext(FormContext)

  const steps = useMemo(() => getStepLabels(formState), [])
  const lastStepIndex = steps.length - 1
  const isLastStep = lastStepIndex === currentStep
  const isCurentStepValid = useMemo(
    () => isStepValid(formState, currentStep),
    [formState, currentStep]
  )

  const onStepClick = useCallback(
    (stepIndex) => () => {
      setCurrentStep(stepIndex)
    },
    [setCurrentStep]
  )

  const onNext = useCallback(() => {
    setCurrentStep((step) => (step < lastStepIndex ? step + 1 : step))
  }, [setCurrentStep, lastStepIndex])

  const onSubmit = useCallback(() => {
    console.log(getFormattedFormState(formState))
    resetState()
    togglePanel()
  }, [togglePanel, resetState, formState])

  return (
    <div className="create-website">
      <div className="header">
        <span>New Website</span>
        <Button type="secondary" className="close-btn" onClick={togglePanel}>
          <MdClose />
        </Button>
      </div>
      <div className="content">
        <MultiStepForm
          currentStep={currentStep}
          steps={steps}
          onStepClick={onStepClick}
        >
          <FirstStep />
          <SecondStep />
          <ThirdStep />
        </MultiStepForm>
      </div>
      <div className="footer">
        <Button type="secondary" onClick={togglePanel}>
          Close
        </Button>
        {isLastStep ? (
          <Button
            type="primary"
            onClick={onSubmit}
            disabled={!isCurentStepValid}
          >
            Submit & Create Website
          </Button>
        ) : (
          <Button type="primary" onClick={onNext} disabled={!isCurentStepValid}>
            Next
          </Button>
        )}
      </div>
    </div>
  )
}

export default CreateWebsite
