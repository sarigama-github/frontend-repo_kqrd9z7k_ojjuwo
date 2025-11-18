import React from 'react'
import { LayoutGrid, Trophy, Users, BarChart3, Gamepad2, Sparkles } from 'lucide-react'

export default function Sidebar(){
  const items = [
    { href: '#overview', label: 'Overview', icon: Sparkles, color: 'from-pink-300 to-fuchsia-400' },
    { href: '#manage', label: 'Manage', icon: LayoutGrid, color: 'from-sky-300 to-cyan-400' },
    { href: '#leaderboards', label: 'Leaderboards', icon: Trophy, color: 'from-amber-300 to-yellow-400' },
    { href: '#analytics', label: 'Analytics', icon: BarChart3, color: 'from-emerald-300 to-teal-400' },
    { href: '#teams', label: 'Teams', icon: Users, color: 'from-indigo-300 to-violet-400' },
  ]

  return (
    <aside className="hidden md:flex md:w-64 lg:w-72 shrink-0 h-screen sticky top-0 z-40">
      <div className="w-full h-full bg-slate-950/60 backdrop-blur border-r border-white/10 px-4 py-5 flex flex-col gap-4">
        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-400 via-fuchsia-400 to-violet-500 shadow-[0_8px_30px_rgba(168,85,247,0.35)] grid place-items-center">
            <Gamepad2 className="text-white" size={22} />
          </div>
          <div>
            <div className="text-white font-extrabold tracking-tight">Arcade Admin</div>
            <div className="text-xs text-white/60 -mt-0.5">Dashboard</div>
          </div>
        </div>

        <nav className="mt-2 grid gap-2">
          {items.map(({ href, label, icon: Icon, color }) => (
            <a key={href} href={href} className="group flex items-center gap-3 px-3 py-2 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition shadow-sm">
              <span className={`w-8 h-8 rounded-xl grid place-items-center text-slate-900 bg-gradient-to-br ${color}`}>
                <Icon size={18} />
              </span>
              <span className="text-white/90 group-hover:text-white font-medium">{label}</span>
            </a>
          ))}
        </nav>

        <div className="mt-auto p-3 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-900/20">
          <div className="text-white font-semibold">Create Tournament</div>
          <p className="text-white/60 text-sm">Spin up a new event in seconds.</p>
          <button className="mt-3 w-full px-3 py-2 rounded-xl bg-gradient-to-r from-yellow-300 to-rose-400 text-slate-900 font-bold shadow-[0_10px_30px_rgba(251,191,36,0.35)]">New</button>
        </div>
      </div>
    </aside>
  )
}
