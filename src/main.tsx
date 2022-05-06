import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ScoreProvider } from './contexts/ScoreContext'
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css'
import { DarkModeProvider } from './contexts/ThemeContext'

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
          <App />
        </DarkModeProvider>
      </ScoreProvider>
    </Auth0Provider>
  </React.StrictMode>
)
