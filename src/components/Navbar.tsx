import React from 'react'
import { Link } from 'react-router-dom'
import { StyledLink, StyledNavbar, StyledNavItems } from '../styled/Navbar'
import { Accent } from '../styled/Random'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = () => {
  const { isAuthenticated, user } = useAuth0()
  return (
    <StyledNavbar>
      <div>
        <StyledLink to='/'>
          Learn.Build.<Accent>Type.</Accent>
        </StyledLink>
      </div>

      <StyledNavItems>
        <li>
          <StyledLink to='/'>Home</StyledLink>
        </li>
        <li>
          <StyledLink to='/highScores'>HighScores</StyledLink>
        </li>
        {!isAuthenticated && (
          <li>
            <LoginButton />
          </li>
        )}
        {isAuthenticated && (
          <li>
            <div>{user?.name}</div>
            <LogoutButton />
          </li>
        )}
      </StyledNavItems>
    </StyledNavbar>
  )
}

export default Navbar
