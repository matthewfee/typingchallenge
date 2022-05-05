import { useEffect, useState, useCallback, KeyboardEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useScore } from '../contexts/ScoreContext'
import { StyledGame, StyledScore, StyledTimer } from '../styled/Game'
import { StyledCharacter, Strong } from '../styled/Random'

const Game = () => {
  const [score, setScore] = useScore()
  const MAX_SECONDS = '5'
  const [ms, setMs] = useState('999')
  const [seconds, setSeconds] = useState(MAX_SECONDS)
  const characters = 'abcdefghijklmnopqrstuvwxyz1234567890'
  const [currentCharacter, setCurrentCharacter] = useState('')

  useEffect(() => {
    setRandomCharacter()
    setScore(0)
    const currentTime = new Date()
    const interval = setInterval(() => updateTime(currentTime), 1)
    return () => {
      clearInterval(interval)
    }
  }, [])

  const keyUpHandler = useCallback(
    (e: any) => {
      console.log(e.key, currentCharacter)
      if (e.key === currentCharacter) {
        setScore((prevScore: number) => prevScore + 1)
      } else {
        if (score > 0) {
          setScore((prevScore: number) => prevScore - 1)
        }
      }
      setRandomCharacter()
    },
    [currentCharacter]
  )

  useEffect(() => {
    document.addEventListener('keyup', keyUpHandler)

    return () => {
      document.removeEventListener('keyup', keyUpHandler)
    }
  }, [keyUpHandler])

  const updateTime = (startTime: Date) => {
    const endTime = new Date()
    const msPassedString = (endTime.getTime() - startTime.getTime()).toString()
    const formattedMSString = ('0000' + msPassedString).slice(-5)

    const updatedSeconds =
      parseInt(MAX_SECONDS) - parseInt(formattedMSString.substring(0, 2)) - 1

    const updatedMS =
      1000 - parseInt(formattedMSString.substring(formattedMSString.length - 3))

    setSeconds(addLeadingZeros(updatedSeconds, 2))
    setMs(addLeadingZeros(updatedMS, 3))
  }

  const addLeadingZeros = (str: number, length: number) => {
    let zeros = ''
    for (let i = 0; i < length; i++) {
      zeros += '0'
    }
    return (zeros + str).slice(-length)
  }

  const navigate = useNavigate()
  useEffect(() => {
    if (parseInt(seconds) <= -1) {
      navigate('/gameOver')
    }
  }, [seconds, ms])

  const setRandomCharacter = () => {
    const randomInt = Math.floor(Math.random() * 36)
    setCurrentCharacter(characters[randomInt])
  }

  return (
    <StyledGame>
      <StyledScore>
        Score: <Strong>{score}</Strong>
      </StyledScore>
      <StyledCharacter>{currentCharacter}</StyledCharacter>
      <StyledTimer>
        Time:{' '}
        <Strong>
          {seconds}: {ms}
        </Strong>
      </StyledTimer>
    </StyledGame>
  )
}

export default Game
