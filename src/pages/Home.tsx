import React from 'react'
import { Link } from 'react-router-dom'
import CTA from '../styled/CTA'
import { Accent, StyledTitle } from '../styled/Random'
import { useAuth0 } from '@auth0/auth0-react'

const Home = () => {
  const { getAccessTokenSilently } = useAuth0()


  

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
