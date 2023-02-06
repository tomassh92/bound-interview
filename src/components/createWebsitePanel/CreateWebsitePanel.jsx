import { useCallback, useContext, useMemo } from "react"
import { MdClose } from "react-icons/md"
import { FormContext } from "../../context/FormContext"
import { PanelContext } from "../../context/PanelContext"
import {
  formatFormState,
  getStepNames,
  isStepValid,
} from "../../utils/formHelper"
import Button from "../button/Button"
import MultiStepForm from "../multiStepForm/MultiStepForm"
import FirstStep from "../steps/FirstStep"
import SecondStep from "../steps/SecondStep"
import ThirdStep from "../steps/ThirdStep"
import "./createWebsitePanel.scss"

const CreateWebsitePanel = () => {
  const { currentStep, setCurrentStep, formState, resetState } =
    useContext(FormContext)
  const { setIsOpen } = useContext(PanelContext)

  const steps = useMemo(() => getStepNames(formState), [])
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

  const onClose = useCallback(() => {
    setIsOpen((isOpen) => !isOpen)
  }, [setIsOpen])

  const onSubmit = useCallback(() => {
    console.log(formatFormState(formState))
    resetState()
    onClose()
  }, [onClose, resetState, formState])

  return (
    <div className="create-website-panel">
      <div className="header">
        <span>New Website</span>
        <Button type="secondary" className="close-btn" onClick={onClose}>
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
        <Button type="secondary" onClick={onClose}>
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

export default CreateWebsitePanel
