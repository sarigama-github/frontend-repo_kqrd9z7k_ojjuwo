import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuickStats from './components/QuickStats'
import ManagePanels from './components/ManagePanels'
import Leaderboards from './components/Leaderboards'
import Analytics from './components/Analytics'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
      <Navbar />
      <Hero />
      <QuickStats />
      <ManagePanels />
      <Leaderboards />
      <Analytics />
      <footer className="max-w-7xl mx-auto px-4 py-10 text-center text-white/60">Built with a vibrant toon-style UI • Manage your esports universe</footer>
    </div>
  )
}

export default App
