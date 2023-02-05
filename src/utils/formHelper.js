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
