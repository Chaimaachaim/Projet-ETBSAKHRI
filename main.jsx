import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import CursorProvider from "./assets/compononts/CurserContext"
ReactDOM.createRoot(document.getElementById('root')).render(
  <CursorProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </CursorProvider>
)
