import { createContext, useState } from "react"

export const FormContext = createContext({})

const FORM_STATE = {
  name: {
    valid: false,
    label: "Name",
    value: "",
  },
  analytics_integrations: {
    valid: false,
    label: "Analytics",
    value: {
      "Google Analytics Universal": false,
      "Google Analytics 4": false,
      "Google Tag Manager": false,
      "Adobe Analytics": false,
    },
  },
  data_integrations: {
    valid: false,
    label: "Data",
    value: {
      "6sense": false,
      Clearbit: false,
      "Dun & Bradstreet": false,
      Terminus: false,
    },
  },
}

export const FormContextProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [formState, setFormState] = useState(FORM_STATE)

  const resetState = () => {
    setFormState(FORM_STATE)
    setCurrentStep(0)
  }

  return (
    <FormContext.Provider
      value={{
        steps: Object.values(formState).map((v) => v.label),
        currentStep,
        setCurrentStep,
        resetState,
        formState,
        setFormState,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
