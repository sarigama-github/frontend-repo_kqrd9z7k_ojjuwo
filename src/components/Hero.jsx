import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[52vh] min-h-[420px] w-full overflow-hidden rounded-b-[2.5rem]" id="overview">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-950/95 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-end pb-10">
        <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-5 border border-white/10 shadow-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white drop-shadow">Esports & Tournaments HQ</h1>
          <p className="text-white/80 mt-2 max-w-2xl">Manage games, players, teams, matches and leaderboards in a playful, toon-inspired control room. Create tournaments, track analytics, and celebrate champions!</p>
        </div>
      </div>
    </section>
  )
}
