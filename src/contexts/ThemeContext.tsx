import React, { useContext, useState } from 'react'

const DarkModeContext = React.createContext<any>(-1)
const useDarkMode = () => useContext(DarkModeContext)

type Props = {
  children: JSX.Element
}

const DarkModeProvider = ({ children }: Props) => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
      {children}
    </DarkModeContext.Provider>
  )
}

export { DarkModeProvider, useDarkMode }
