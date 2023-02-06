import "./checkboxGroup.scss"

const CheckboxGroup = ({ options, onChange }) => {
  const optionsKeys = Object.keys(options)
  const handleChange = (label) => () => {
    onChange({ ...options, [label]: !options[label] })
  }

  return (
    <ul className="checkbox-group">
      {optionsKeys.map((option, index) => {
        return (
          <li key={index}>
            <input
              type="checkbox"
              id={index}
              name={option}
              value={option}
              checked={options[option]}
              onChange={handleChange(option)}
            />
            <label htmlFor={index}>{option}</label>
          </li>
        )
      })}
    </ul>
  )
}

export default CheckboxGroup
