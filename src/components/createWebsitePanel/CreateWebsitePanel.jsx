import { useCallback, useContext, useMemo } from "react"
import { MdClose } from "react-icons/md"
import { FormContext } from "../../context/FormContext"
import { PanelContext } from "../../context/PanelContext"
import { formatFormState } from "../../utils/formHelper"
import Button from "../button/Button"
import MultiStepForm from "../multiStepForm/MultiStepForm"
import FirstStep from "../steps/FirstStep"
import SecondStep from "../steps/SecondStep"
import ThirdStep from "../steps/ThirdStep"
import "./createWebsitePanel.scss"

const CreateWebsitePanel = () => {
  const { resetState, currentStep, setCurrentStep, steps, data } =
    useContext(FormContext)
  const { setIsOpen } = useContext(PanelContext)

  const lastStepIndex = steps.length - 1
  const isLastStep = lastStepIndex === currentStep
  const isCurentStepValid = useMemo(() => {
    return data[Object.keys(data)[currentStep]].valid
  }, [data, currentStep])

  const handleStepClick = useCallback(
    (stepIndex) => () => {
      setCurrentStep(stepIndex)
    },
    [setCurrentStep]
  )

  const handleNext = useCallback(() => {
    setCurrentStep((step) => (step < lastStepIndex ? step + 1 : step))
  }, [setCurrentStep, lastStepIndex])

  const handleClose = useCallback(() => {
    setIsOpen((isOpen) => !isOpen)
  }, [setIsOpen])

  const handleSubmit = useCallback(() => {
    console.log(formatFormState(data))
    resetState()
    handleClose()
  }, [handleClose, resetState, data])

  return (
    <div className="createWebsitePanel">
      <div className="header">
        <span>New Website</span>
        <Button type="secondary" className="closeBtn" onClick={handleClose}>
          <MdClose />
        </Button>
      </div>
      <div className="content">
        <MultiStepForm
          currentStep={currentStep}
          steps={steps}
          onStepClick={handleStepClick}
        >
          <FirstStep />
          <SecondStep />
          <ThirdStep />
        </MultiStepForm>
      </div>
      <div className="footer">
        <Button type="secondary" onClick={handleClose}>
          Close
        </Button>
        {isLastStep ? (
          <Button
            type="primary"
            onClick={handleSubmit}
            disabled={!isCurentStepValid}
          >
            Submit & Create Website
          </Button>
        ) : (
          <Button
            type="primary"
            onClick={handleNext}
            disabled={!isCurentStepValid}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  )
}

export default CreateWebsitePanel
