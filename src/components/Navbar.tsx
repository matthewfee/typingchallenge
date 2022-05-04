import React from 'react'
import { Link } from 'react-router-dom'
import { StyledLink, StyledNavbar, StyledNavItems } from '../styled/Navbar'
import { Accent } from '../styled/Random'

const Navbar = () => {
  return (
    <StyledNavbar>
      <div>
        <StyledLink to='/'>
          {' '}
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
      </StyledNavItems>
    </StyledNavbar>
  )
}

export default Navbar
