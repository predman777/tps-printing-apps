import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Branding from './Branding.jsx'
import Roadmap from './Roadmap.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
