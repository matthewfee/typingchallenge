import React from 'react'
import { StyledGame, StyledScore, StyledTimer } from '../styled/Game'
import { StyledCharacter, Strong } from '../styled/Random'

const Game = () => {
  return (
    <StyledGame>
      <StyledScore>
        Score: <Strong>0</Strong>
      </StyledScore>
      <StyledCharacter>A</StyledCharacter>
      <StyledTimer>
        Time: <Strong>00: 000</Strong>
      </StyledTimer>
    </StyledGame>
  )
}

export default Game
