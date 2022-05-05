import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ScoreProvider } from './contexts/ScoreContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ScoreProvider>
      <App />
    </ScoreProvider>
  </React.StrictMode>
)
