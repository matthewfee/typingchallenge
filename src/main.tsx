import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ScoreProvider } from './contexts/ScoreContext'
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css'
import { DarkModeProvider } from './contexts/ThemeContext'
import { WordsProvider } from './contexts/WordsContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-j89-uh0s.us.auth0.com'
      clientId='SkQ0xkmZVq4zguXoV5O5TTnqVzu39op9'
      redirectUri={window.location.origin}
      audience={'https://typechallengeapi'}
    >
      <ScoreProvider>
        <DarkModeProvider>
          <WordsProvider>
            <App />
          </WordsProvider>
        </DarkModeProvider>
      </ScoreProvider>
    </Auth0Provider>
  </React.StrictMode>
)
