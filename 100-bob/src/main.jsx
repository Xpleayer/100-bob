import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import App from './App.jsx'
import Tarieven from './pages/Tarieven.jsx'
import StarterPackage from './pages/StarterPackage.jsx'
import StandaardPackage from './pages/StandaardPackage.jsx'
import ComfortPackage from './pages/ComfortPackage.jsx'
import PremiumPackage from './pages/PremiumPackage.jsx'
import OverOns from './pages/OverOns.jsx'
import ContactPage from './pages/ContactPage.jsx'
import './index.css'
import 'leaflet/dist/leaflet.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tarieven" element={<Tarieven />} />
        <Route path="/pakket/starter" element={<StarterPackage />} />
        <Route path="/pakket/standaard" element={<StandaardPackage />} />
        <Route path="/pakket/comfort" element={<ComfortPackage />} />
        <Route path="/pakket/premium" element={<PremiumPackage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/over-ons" element={<OverOns />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
