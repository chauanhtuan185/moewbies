import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyleds.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/moewbies" element={<Moewbies />} /> */}
      </Routes>
    </Router>
  </StrictMode>,
)
