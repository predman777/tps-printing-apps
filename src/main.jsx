import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import App from './App.jsx'
import Branding from './Branding.jsx'
import Roadmap from './Roadmap.jsx'
import './index.css'

// Component to scroll to top on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
