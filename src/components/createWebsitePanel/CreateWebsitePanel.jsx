import { useCallback, useContext, useMemo } from "react"

import "./createWebsitePanel.scss"
import MultiStepForm from "../multiStepForm/MultiStepForm"
import { FormContext } from "../../context/FormContext"
import { PanelContext } from "../../context/PanelContext"
import Button from "../button/Button"
import { MdClose } from "react-icons/md"
import { formatFormState } from "../../utils/formHelper"

const CreateWebsitePanel = () => {
  const { resetState, step, setStep, steps, data } = useContext(FormContext)
  const { setIsOpen } = useContext(PanelContext)

  const lastStepIndex = steps.length - 1
  const isLastStep = lastStepIndex === step

  const isCurentStepValid = useMemo(() => {
    return data[Object.keys(data)[step]].valid
  }, [data, step])

  const handleNext = useCallback(() => {
    setStep((step) => (step < lastStepIndex ? step + 1 : step))
  }, [setStep, lastStepIndex])

  const handleStepClick = useCallback(
    (stepIndex) => () => {
      setStep(stepIndex)
    },
    [setStep]
  )

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
          step={step}
          steps={steps}
          handleStepClick={handleStepClick}
        />
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
