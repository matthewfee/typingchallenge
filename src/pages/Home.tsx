import { useEffect, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CTA from '../styled/CTA'
import { Accent, StyledTitle } from '../styled/Random'

const Home = () => {
  const navigate = useNavigate()
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

  return (
    <div>
      <StyledTitle> Ready to type?</StyledTitle>
      <CTA to='/game'>
        Click or type <Accent>'s'</Accent> to start playing!
      </CTA>
    </div>
  )
}

export default Home
