import { useContext } from "react"
import { FormContext } from "../../context/FormContext"
import CheckboxGroup from "../checkboxGroup/CheckboxGroup"
import FormStep from "../formStep/FormStep"

const SecondStep = () => {
  const { data, setData } = useContext(FormContext)

  const handleOnChange = (checkedState) => {
    setData((prevData) => {
      return {
        ...prevData,
        analytics_integrations: {
          ...prevData.analytics_integrations,
          value: checkedState,
          valid: Object.values(checkedState).some((state) => !!state),
        },
      }
    })
  }

  return (
    <FormStep label="Choose One or More Analytics Integrations">
      <CheckboxGroup
        options={data.analytics_integrations.value}
        onChange={handleOnChange}
      />
    </FormStep>
  )
}

export default SecondStep
