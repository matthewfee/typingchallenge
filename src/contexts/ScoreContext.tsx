import React, {
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ContextType
} from 'react'

const ScoreContext = React.createContext<any>(-1)
const useScore = () => useContext(ScoreContext)

type Props = {
  children: JSX.Element
}

const ScoreProvider = ({ children }: Props) => {
  const [score, setScore] = useState(-1)

  return (
    <ScoreContext.Provider value={[score, setScore]}>
      {children}
    </ScoreContext.Provider>
  )
}

export { ScoreProvider, useScore }
