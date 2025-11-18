import React from 'react'
import { Crown, Medal, Trophy } from 'lucide-react'

const Row = ({ rank, name, score, highlight }) => (
  <div className={`grid grid-cols-[40px_1fr_100px] items-center gap-3 px-4 py-3 rounded-2xl border border-white/10 ${highlight ? 'bg-gradient-to-r from-amber-300/20 to-rose-300/20' : 'bg-white/5'}`}>
    <div className="text-white font-bold text-lg">{rank}</div>
    <div className="text-white font-semibold truncate">{name}</div>
    <div className="text-white/80 text-right">{score}</div>
  </div>
)

export default function Leaderboards(){
  const teams = [
    { name: 'Crimson Phoenix', score: 2480 },
    { name: 'Neon Knights', score: 2300 },
    { name: 'Shadow Foxes', score: 2190 },
  ]
  const players = [
    { name: 'PlayerOne', score: 980 },
    { name: 'AstraNova', score: 940 },
    { name: 'RogueX', score: 915 },
  ]

  return (
    <section id="leaderboards" className="max-w-7xl mx-auto px-4 mt-8 grid lg:grid-cols-2 gap-6">
      <div className="rounded-3xl p-5 bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl grid place-items-center bg-gradient-to-br from-amber-300 to-yellow-400 text-slate-900"><Crown size={20}/></div>
          <div className="text-white font-bold">Team Rankings</div>
        </div>
        <div className="grid gap-3">
          {teams.map((t, i) => <Row key={i} rank={i+1} name={t.name} score={t.score} highlight={i===0} />)}
        </div>
      </div>

      <div className="rounded-3xl p-5 bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl grid place-items-center bg-gradient-to-br from-violet-300 to-fuchsia-400 text-slate-900"><Medal size={20}/></div>
          <div className="text-white font-bold">Player Rankings</div>
        </div>
        <div className="grid gap-3">
          {players.map((p, i) => <Row key={i} rank={i+1} name={p.name} score={p.score} highlight={i===0} />)}
        </div>
      </div>

      <div className="rounded-3xl p-5 bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl lg:col-span-2">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl grid place-items-center bg-gradient-to-br from-teal-300 to-emerald-400 text-slate-900"><Trophy size={20}/></div>
          <div className="text-white font-bold">Global Rankings</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {["FPS", "MOBA", "Fighting", "Strategy"].map((c,i)=> (
            <div key={i} className="rounded-2xl p-4 bg-white/5 border border-white/10 text-white/80">
              <div className="text-white font-bold">{c}</div>
              <div className="text-sm">Top 100 across games</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
