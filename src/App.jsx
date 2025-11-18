import React from 'react'
import DashboardShell from './components/DashboardShell'
import Hero from './components/Hero'
import QuickStats from './components/QuickStats'
import ManagePanels from './components/ManagePanels'
import Leaderboards from './components/Leaderboards'
import Analytics from './components/Analytics'

function App() {
  return (
    <DashboardShell>
      <Hero />
      <QuickStats />
      <ManagePanels />
      <Leaderboards />
      <Analytics />
      <footer className="px-2 py-10 text-center text-white/60">Built with a vibrant toon-style UI • Manage your esports universe</footer>
    </DashboardShell>
  )
}

export default App
