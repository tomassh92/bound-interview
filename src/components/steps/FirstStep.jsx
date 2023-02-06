import { useContext } from "react"
import { FormContext } from "context/FormContext"
import FormStep from "components/formStep/FormStep"

const FirstStep = () => {
  const { formState, setFormState } = useContext(FormContext)

  const handleChange = (e) => {
    const value = e.target.value
    setFormState((prevData) => {
      return {
        ...prevData,
        name: { ...prevData.name, value: value, valid: !!value },
      }
    })
  }
  return (
    <FormStep label="Website Name">
      <input
        type="text"
        placeholder="Content"
        value={formState.name.value}
        onChange={handleChange}
        required
      />
    </FormStep>
  )
}

export default FirstStep
