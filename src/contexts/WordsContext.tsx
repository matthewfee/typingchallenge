import React, { useContext, useState } from 'react'
import { nature, chaos } from '../data/words'

const WordsContext = React.createContext<any>(-1)
const useWords = () => useContext(WordsContext)

type Props = {
  children: JSX.Element
}

const WordsProvider = ({ children }: Props) => {
  const [words, setWords] = useState(nature)

  return (
    <WordsContext.Provider value={[words, setWords]}>
      {children}
    </WordsContext.Provider>
  )
}

export { WordsProvider, useWords }
