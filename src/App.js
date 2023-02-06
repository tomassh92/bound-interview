import { useCallback, useState } from "react"
import Button from "components/button/Button"
import CreateWebsite from "components/createWebsite/CreateWebsite"
import Panel from "components/panel/Panel"
import { FormContextProvider } from "context/FormContext"

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const togglePanel = useCallback(() => {
    setIsOpen((isOpen) => !isOpen)
  }, [setIsOpen])

  return (
    <div className="App">
      <Button
        style={{ position: "absolute", top: 16, right: 24 }}
        type="primary"
        onClick={togglePanel}
      >
        + New Website
      </Button>
      <Panel isOpen={isOpen} position="right">
        <FormContextProvider>
          <CreateWebsite togglePanel={togglePanel} />
        </FormContextProvider>
      </Panel>
    </div>
  )
}

export default App
