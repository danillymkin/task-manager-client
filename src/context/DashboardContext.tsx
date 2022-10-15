import React, { createContext, FunctionComponent, useState } from 'react'

type DashboardContextType = {
  isSidebarOpen: boolean
  toggleSidebar?: () => void
}

export const DashboardContext = createContext<DashboardContextType>({
  isSidebarOpen: true,
})

interface DashboardProviderProps {
  children: React.ReactNode
}

type Props = DashboardProviderProps

export const DashboardProvider: FunctionComponent<Props> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState)
  }

  return (
    <DashboardContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}
