import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "rsuite/dist/rsuite.css";
import '/src/assets/styles/style.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
