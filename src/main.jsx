import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
BrowserRouter
import CoinContextProvider from './context/CoinContext.jsx'
import { ThemeProvider } from './context/themeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
      <CoinContextProvider>
        <App />
      </CoinContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
