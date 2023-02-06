import { useContext } from "react"
import { FormContext } from "context/FormContext"
import CheckboxGroup from "components/checkboxGroup/CheckboxGroup"
import FormStep from "components/formStep/FormStep"

const ThirdStep = () => {
  const { formState, setFormState } = useContext(FormContext)

  const handleOnChange = (checkedState) => {
    setFormState((prevData) => {
      return {
        ...prevData,
        data_integrations: {
          ...prevData.data_integrations,
          value: checkedState,
          valid: Object.values(checkedState).some((state) => !!state),
        },
      }
    })
  }

  return (
    <FormStep label="Choose One or More Data Integrations">
      <CheckboxGroup
        options={formState.data_integrations.value}
        onChange={handleOnChange}
      />
    </FormStep>
  )
}

export default ThirdStep
