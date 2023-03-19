import React from 'react'
import './App.css'
import Nav from './components/Navbar'
import Gallery from './components/Gallery'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <About />
      <Gallery/>
    </div>
  )
}
export default App
