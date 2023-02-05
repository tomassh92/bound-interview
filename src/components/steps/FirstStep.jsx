import { useContext } from "react"
import { FormContext } from "../../context/FormContext"
import FormStep from "../formStep/FormStep"

const FirstStep = () => {
  const { data, setData } = useContext(FormContext)

  const handleChange = (e) => {
    const value = e.target.value
    setData((prevData) => {
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
        value={data.name.value}
        onChange={handleChange}
        required
      />
    </FormStep>
  )
}

export default FirstStep
