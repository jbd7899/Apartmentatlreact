import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Midtown from './pages/Midtown'
import VirginiaHighlands from './pages/VirginiaHighlands'
import Dallas from './pages/Dallas'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/midtown" element={<Midtown />} />
            <Route path="/virginia-highlands" element={<VirginiaHighlands />} />
            <Route path="/dallas" element={<Dallas />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
