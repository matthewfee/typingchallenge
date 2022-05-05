import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Game from './pages/Game'
import Home from './pages/Home'
import GameOver from './pages/GameOver'
import HighScores from './pages/HighScores'
import Navbar from './components/Navbar'
import { Container } from './styled/Container'
import { Main } from './styled/Main'
import Global from './styled/Global'

function App() {
  return (
    <div className='App'>
      <Router>
        <Global />
        <Main>
          <Navbar />
          <Container>
            <Routes>
              <Route path='/highScores' element={<HighScores />}></Route>
              <Route path='/gameOver' element={<GameOver />}></Route>
              <Route path='/game' element={<Game />}></Route>
              <Route path='/' element={<Home />}></Route>
            </Routes>
          </Container>
        </Main>
      </Router>
    </div>
  )
}

export default App
