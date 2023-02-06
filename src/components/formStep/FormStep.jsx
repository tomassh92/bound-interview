import { MdHelpOutline } from "react-icons/md"
import "./formStep.scss"

const FormStep = ({ label, children }) => {
  return (
    <div className="form-step">
      <div className="label">
        <span>{label}</span>
        <MdHelpOutline />
      </div>
      {children}
    </div>
  )
}

export default FormStep
