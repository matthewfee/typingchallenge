import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useScore } from '../contexts/ScoreContext'
import { StyledLink } from '../styled/Navbar'
import { StyledCharacter } from '../styled/Random'
import { useAuth0 } from '@auth0/auth0-react'

const GameOver = () => {
  const [score] = useScore()
  const [scoreMessage, setScoreMessage] = useState('checking High Score')

  const { getAccessTokenSilently, isAuthenticated, user } = useAuth0()

  const navigate = useNavigate()

  useEffect(() => {
    if (score === -1) {
      navigate('/')
    }
  }, [])

  const userName = user?.name || 'Anonymous'

  useEffect(() => {
    const saveHighScore = async () => {
      try {
        const token = await getAccessTokenSilently()
        const options = {
          method: 'POST',
          body: JSON.stringify({ name: userName, score }),
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
        const res = await fetch('/.netlify/functions/saveHighScore', options)
        const data = await res.json()
        if (data.id) {
          setScoreMessage('Congrats! You got a high score!!')
        } else {
          setScoreMessage('Sorry, not a high score. Keep trying!')
        }
      } catch (err) {
        console.error(err)
      }
    }
    if (isAuthenticated) {
      saveHighScore()
    }
  }, [score])

  return (
    <div>
      <h1>Game Over</h1>
      <h2>{scoreMessage}</h2>
      {!isAuthenticated && (
        <h2>Log in or sign up to compete for high scores.</h2>
      )}
      <StyledCharacter>{score}</StyledCharacter>
      <div>
        <StyledLink to='/'>Go Home</StyledLink>
      </div>
      <div>
        <StyledLink to='/game'>Play Again</StyledLink>
      </div>
    </div>
  )
}

export default GameOver
