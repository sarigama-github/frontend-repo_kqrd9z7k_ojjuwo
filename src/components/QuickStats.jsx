import React from 'react'
import { Sparkles, Trophy, Users, Joystick, Timer } from 'lucide-react'

const StatCard = ({ icon: Icon, label, value, accent }) => (
  <div className="rounded-3xl p-5 bg-white/6 border border-white/10 backdrop-blur-sm shadow-xl">
    <div className={`w-10 h-10 rounded-xl grid place-items-center text-slate-900 ${accent} shadow-[0_10px_30px_rgba(0,0,0,0.15)]`}>
      <Icon size={20} />
    </div>
    <div className="mt-3 text-white/70 text-sm">{label}</div>
    <div className="text-2xl font-extrabold text-white">{value}</div>
  </div>
)

export default function QuickStats() {
  return (
    <section className="max-w-7xl mx-auto px-4 -mt-12 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <StatCard icon={Sparkles} label="Active Tournaments" value="12" accent="bg-gradient-to-br from-yellow-300 to-rose-400" />
        <StatCard icon={Trophy} label="Total Matches" value="342" accent="bg-gradient-to-br from-teal-300 to-emerald-400" />
        <StatCard icon={Users} label="Registered Players" value="1,289" accent="bg-gradient-to-br from-indigo-300 to-violet-400" />
        <StatCard icon={Joystick} label="Games" value="24" accent="bg-gradient-to-br from-sky-300 to-cyan-400" />
        <StatCard icon={Timer} label="Avg Match (m)" value="38" accent="bg-gradient-to-br from-pink-300 to-fuchsia-400" />
      </div>
    </section>
  )
}
