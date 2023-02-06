export const formatFormState = (formState) => {
  let formttedState = {}
  for (let key in formState) {
    const value = formState[key].value
    if (typeof value !== "string") {
      var arr = []
      for (let key in value) {
        if (value[key]) {
          arr.push(key)
        }
      }
      formttedState[key] = arr
    } else {
      formttedState[key] = value
    }
  }
  return formttedState
}

export const getStepNames = (formState) => {
  return Object.values(formState).map((v) => v.label)
}

export const isStepValid = (formState, currentStep) => {
  return formState[Object.keys(formState)[currentStep]].valid
}
