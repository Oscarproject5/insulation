import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import AppRouter from './AppRouter.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import { initEnhancedConversions } from './utils/conversionTracking.js'
import './App.css'

// Clear any old cached form data with a version check
const CACHE_VERSION = 'v2'; // Increment this to force clear all cached data
const clearOldCachedData = () => {
  try {
    const currentVersion = localStorage.getItem('formCacheVersion');

    if (currentVersion !== CACHE_VERSION) {
      // Clear all localStorage
      localStorage.clear();
      // Set new version
      localStorage.setItem('formCacheVersion', CACHE_VERSION);

      // Clear all sessionStorage
      sessionStorage.clear();

      console.log('Cleared old cached form data');
    }
  } catch (error) {
    console.error('Error clearing cached data:', error);
  }
};

clearOldCachedData();

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