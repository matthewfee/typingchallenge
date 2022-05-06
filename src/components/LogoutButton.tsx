import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { StyledButtonLink } from '../styled/Navbar'

const LogoutButton = () => {
  const { logout } = useAuth0()
  return (
    <StyledButtonLink
      onClick={() => {
        logout()
      }}
    >
      Log Out
    </StyledButtonLink>
  )
}

export default LogoutButton
