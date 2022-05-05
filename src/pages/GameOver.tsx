import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useScore } from '../contexts/ScoreContext'
import { StyledLink } from '../styled/Navbar'

const GameOver = () => {
  const [score] = useScore()

  const navigate = useNavigate()

  useEffect(() => {
    if (score === -1) {
      navigate('/')
    }
  }, [])

  return (
    <div>
      <h2>Game Over</h2>
      <p>{score}</p>
      <StyledLink to='/'>Go Home</StyledLink>
      <StyledLink to='/game'>Play Again</StyledLink>
    </div>
  )
}

export default GameOver
