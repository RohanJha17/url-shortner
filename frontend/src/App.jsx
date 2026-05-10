import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Shorten from './pages/Shorten'
import Redirect from './pages/Redirect'

function App() {
  return (
    <Router>
      <div className="font-geist-sans antialiased bg-purple-100 flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shorten" element={<Shorten />} />
            <Route path="/:shorturl" element={<Redirect />} />
          </Routes>
        </div>
        <Footer />
        <ToastContainer position="top-right" />
      </div>
    </Router>
  )
}

export default App
