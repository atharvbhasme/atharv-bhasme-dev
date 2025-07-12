import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <LanguageProvider>
    <BrowserRouter basename="/atharv-bhasme-dev/">
      <App />
    </BrowserRouter>
    </LanguageProvider>
  </StrictMode>,
)
