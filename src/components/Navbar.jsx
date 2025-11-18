import React from 'react'
import { Gamepad2, Trophy, Users, LayoutGrid, BarChart3 } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-400 via-fuchsia-400 to-violet-500 shadow-[0_8px_30px_rgba(168,85,247,0.35)] grid place-items-center">
            <Gamepad2 className="text-white" size={22} />
          </div>
          <div>
            <div className="text-white font-extrabold tracking-tight text-xl">Arcade Admin</div>
            <div className="text-xs text-white/60 -mt-1">Esports Tournament Dashboard</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-white/80">
          <a href="#overview" className="hover:text-white transition">Overview</a>
          <a href="#manage" className="hover:text-white transition flex items-center gap-2"><LayoutGrid size={16}/> Manage</a>
          <a href="#leaderboards" className="hover:text-white transition flex items-center gap-2"><Trophy size={16}/> Leaderboards</a>
          <a href="#analytics" className="hover:text-white transition flex items-center gap-2"><BarChart3 size={16}/> Analytics</a>
          <a href="#teams" className="hover:text-white transition flex items-center gap-2"><Users size={16}/> Teams</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="px-3 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition shadow-inner">Sign in</button>
          <button className="px-3 py-2 rounded-xl bg-gradient-to-r from-yellow-400 to-rose-500 text-slate-900 font-bold shadow-[0_10px_30px_rgba(251,191,36,0.35)]">Create Tournament</button>
        </div>
      </div>
    </header>
  )
}
