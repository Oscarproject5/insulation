import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import AppRouter from './AppRouter.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import { initEnhancedConversions } from './utils/conversionTracking.js'
import './App.css'

// Initialize enhanced conversions when app loads
initEnhancedConversions();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppRouter />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)