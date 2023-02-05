import { createContext, useState } from "react"

export const PanelContext = createContext()

export const PanelContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <PanelContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </PanelContext.Provider>
  )
}
