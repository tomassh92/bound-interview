import "./formStep.scss"
import { MdHelpOutline } from "react-icons/md"

const FormStep = ({ label, children }) => {
  return (
    <div className="formStep">
      <div className="label">
        <span>{label}</span>
        <MdHelpOutline />
      </div>
      {children}
    </div>
  )
}

export default FormStep
