import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Game from './pages/Game'
import Home from './pages/Home'
import GameOver from './pages/GameOver'
import HighScores from './pages/HighScores'
import Navbar from './components/Navbar'
import { Container } from './styled/Container'
import { Main } from './styled/Main'
import { GlobalStyle } from './styled/Global'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styled/Themes'
import useTheme from './hooks/UseTheme'

function App() {
  const [theme, toggleTheme] = useTheme()
  const currentTheme = theme === 'light' ? lightTheme : darkTheme

  return (
    <div className='App'>
      <Router>
        <ThemeProvider theme={currentTheme}>
          <GlobalStyle />
          <Main>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <Container>
              <Routes>
                <Route path='/highScores' element={<HighScores />}></Route>
                <Route path='/gameOver' element={<GameOver />}></Route>
                <Route path='/game' element={<Game />}></Route>
                <Route path='/' element={<Home />}></Route>
              </Routes>
            </Container>
          </Main>
        </ThemeProvider>
      </Router>
    </div>
  )
}

export default App
