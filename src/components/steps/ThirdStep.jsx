import { useContext } from "react"
import { FormContext } from "../../context/FormContext"
import CheckboxGroup from "../checkboxGroup/CheckboxGroup"
import FormStep from "../formStep/FormStep"

const ThirdStep = () => {
  const { data, setData } = useContext(FormContext)

  const handleOnChange = (checkedState) => {
    setData((prevData) => {
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
        options={data.data_integrations.value}
        onChange={handleOnChange}
      />
    </FormStep>
  )
}

export default ThirdStep