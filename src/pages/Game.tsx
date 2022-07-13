import { useEffect, useState, useCallback, KeyboardEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useScore } from '../contexts/ScoreContext'
import {
  StyledGame,
  StyledInput,
  StyledScore,
  StyledTimer,
  StyledWordContainer
} from '../styled/Game'
import { StyledWord, Strong } from '../styled/Random'
import { nature } from '../data/words'
import { StyledButton } from '../styled/Buttons'
import { useWords } from '../contexts/WordsContext'

const Game = () => {
  const [score, setScore] = useScore()
  const MAX_SECONDS = '30'
  const [ms, setMs] = useState('999')
  const [seconds, setSeconds] = useState(MAX_SECONDS)
  const [wordsList, setWordsList] = useState([])

  const [typingInput, setTypingInput] = useState('')
  const [words] = useWords()
  const [themeName, setThemeName] = useState('')
  const [currentWord, setCurrentWord] = useState(words.wordsList[0])

  useEffect(() => {
    setScore(0)
    const currentTime = new Date()
    const interval = setInterval(() => updateTime(currentTime), 1)
    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    setWordsList(words.wordsList)
    setThemeName(words.themeName)
  }, [words])

  const keyUpHandler = useCallback((): void => {
    console.log('key up handler', typingInput)
    if (typingInput === currentWord) {
      console.log('WORD MATCH', typingInput, currentWord)
      setScore((prevScore: number) => prevScore + 1)
      setTypingInput('')
      setRandomWord()
    }
  }, [typingInput])

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

  const setRandomWord = () => {
    const wordList = wordsList.filter((word: string) => word !== currentWord)
    console.log('WORD LIST', wordsList)
    const length = wordsList.length
    const randomInt = Math.floor(Math.random() * length)
    console.log(randomInt)
    const newWord = wordsList[randomInt]
    setCurrentWord(newWord)
  }

  const handleTypingInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypingInput(event.target.value)
  }

  return (
    <StyledGame>
      <StyledScore>
        Score: <Strong>{score}</Strong>
      </StyledScore>

      <StyledWordContainer>
        <h2>{themeName}</h2>
        <StyledWord>{currentWord}</StyledWord>
        <StyledInput
          type='text'
          placeholder=''
          value={typingInput}
          onChange={handleTypingInput}
          autoFocus
        />
      </StyledWordContainer>

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
