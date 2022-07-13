import { useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledButton } from '../styled/Buttons'
import { Container } from '../styled/Container'
import CTA from '../styled/CTA'
import { Accent, StyledTitle } from '../styled/Random'
import { nature, chaos } from '../data/words'
import { useWords } from '../contexts/WordsContext'
import { StyledHeader } from '../styled/Header'

const Home = () => {
  const navigate = useNavigate()
  const [words, setWords] = useWords()
  const keyUpHandler = useCallback((e: any) => {
    if (e.key === 's') {
      navigate('/game')
    } else {
      return
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keyup', keyUpHandler)
    return () => {
      document.removeEventListener('keyup', keyUpHandler)
    }
  }, [keyUpHandler])

  const wordThemeHandler = (newWordList: {}) => {
    setWords(newWordList)
  }

  return (
    <div>
      <StyledTitle> Ready to type?</StyledTitle>
      <CTA to='/game'>
        Click or type <Accent>'s'</Accent> to start playing!
      </CTA>
      <StyledHeader>Select Theme</StyledHeader>
      <Container>
        <StyledButton onClick={() => wordThemeHandler(nature)}>
          Nature
        </StyledButton>
        <StyledButton onClick={() => wordThemeHandler(chaos)}>
          Chaos
        </StyledButton>
      </Container>
    </div>
  )
}

export default Home
