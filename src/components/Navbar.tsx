import React from 'react'
import { Link } from 'react-router-dom'
import {
  StyledButtonLink,
  StyledLink,
  StyledNavbar,
  StyledNavItems
} from '../styled/Navbar'
import { Accent } from '../styled/Random'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'
import { useDarkMode } from '../contexts/ThemeContext'
import { StyledButton } from '../styled/Buttons'

const Navbar = ({ theme, toggleTheme }: any) => {
  const [darkMode, setDarkMode] = useDarkMode()
  const { isAuthenticated, user } = useAuth0()

  return (
    <StyledNavbar>
      <div>
        <StyledLink to='/'>
          <Accent>Type</Accent>Challenge
        </StyledLink>
      </div>

      <StyledNavItems>
        <li>
          <StyledLink to='/'>Home</StyledLink>
        </li>
        <li>
          <StyledLink to='/highScores'>HighScores</StyledLink>
        </li>
        {isAuthenticated && (
          <li>
            <LogoutButton />
            <div>{user?.name}</div>
          </li>
        )}
        {!isAuthenticated && (
          <li>
            <LoginButton />
          </li>
        )}
        <li>
          <StyledButton
            onClick={() => {
              toggleTheme()
            }}
          >
            Switch Theme
          </StyledButton>
        </li>
      </StyledNavItems>
    </StyledNavbar>
  )
}

export default Navbar
