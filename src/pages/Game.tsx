import { useEffect, useState } from 'react'
import { StyledGame, StyledScore, StyledTimer } from '../styled/Game'
import { StyledCharacter, Strong } from '../styled/Random'

const Game = () => {
  const [score, setScore] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setScore((prevScore: number) => {
        return prevScore + 1
      })
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [score])

  return (
    <StyledGame>
      <StyledScore>
        Score: <Strong>{score}</Strong>
      </StyledScore>
      <StyledCharacter>A</StyledCharacter>
      <StyledTimer>
        Time: <Strong>00: 000</Strong>
      </StyledTimer>
    </StyledGame>
  )
}

export default Game
