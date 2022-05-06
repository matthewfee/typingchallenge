import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { StyledButtonLink } from '../styled/Navbar'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <StyledButtonLink
      onClick={() => {
        loginWithRedirect()
      }}
    >
      Login
    </StyledButtonLink>
  )
}

export default LoginButton
