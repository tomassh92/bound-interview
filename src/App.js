import { useCallback, useContext } from "react"
import Button from "./components/button/Button"
import CreateWebsitePanel from "./components/createWebsitePanel/CreateWebsitePanel"
import Panel from "./components/panel/Panel"
import { PanelContext } from "./context/PanelContext"

function App() {
  const { isOpen, setIsOpen } = useContext(PanelContext)

  const togglePanel = useCallback(() => {
    setIsOpen((isOpen) => !isOpen)
  }, [setIsOpen])

  return (
    <div className="App">
      <Button type="primary" onClick={togglePanel}>
        + New Website
      </Button>
      <Panel isOpen={isOpen} position="right">
        <CreateWebsitePanel />
      </Panel>
    </div>
  )
}

export default App
