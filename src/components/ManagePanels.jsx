import React, { useEffect, useState } from 'react'
import { Plus, Gamepad2, Users2, Shield, CalendarPlus, Sword } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

const Card = ({ children }) => (
  <div className="rounded-3xl p-5 bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl">
    {children}
  </div>
)

const Field = ({ label, ...props }) => (
  <label className="grid gap-1">
    <span className="text-xs text-white/70">{label}</span>
    <input {...props} className="px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-fuchsia-400/60" />
  </label>
)

function PanelHeader({ icon: Icon, title, subtitle, color }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl grid place-items-center text-slate-900 ${color}`}>
          <Icon size={20} />
        </div>
        <div>
          <div className="text-white font-bold">{title}</div>
          <div className="text-white/60 text-xs -mt-0.5">{subtitle}</div>
        </div>
      </div>
      <button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-yellow-300 to-rose-400 text-slate-900 font-bold shadow-[0_10px_30px_rgba(251,191,36,0.35)]"><Plus size={16}/> Add</button>
    </div>
  )
}

function useFetch(path) {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(`${API_BASE}${path}`).then(r => r.json()).then(d => setData(d.items || [])).catch(()=>{})
  }, [path])
  return data
}

export default function ManagePanels() {
  const games = useFetch('/games')
  const players = useFetch('/players')
  const teams = useFetch('/teams')
  const tournaments = useFetch('/tournaments')

  return (
    <section id="manage" className="max-w-7xl mx-auto px-4 mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <PanelHeader icon={Gamepad2} title="Games" subtitle="Add or edit games" color="bg-gradient-to-br from-sky-300 to-cyan-400" />
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <Field label="Name" placeholder="Valorant" />
          <Field label="Logo URL" placeholder="https://..." />
          <Field label="Genre" placeholder="FPS" />
          <Field label="Platform" placeholder="PC" />
          <Field label="Release Year" placeholder="2020" />
        </div>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          {games.slice(0,8).map((g,i)=> (
            <div key={i} className="rounded-2xl p-3 bg-white/5 border border-white/10">
              <div className="text-white font-semibold text-sm truncate">{g.name || 'Game'}</div>
              <div className="text-white/60 text-xs">{g.genre || 'Genre'}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <PanelHeader icon={Users2} title="Players" subtitle="Register players" color="bg-gradient-to-br from-indigo-300 to-violet-400" />
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <Field label="Player Name" placeholder="PlayerOne" />
          <Field label="Email" placeholder="player@email.com" />
          <Field label="Avatar URL" placeholder="https://..." />
          <Field label="Age" placeholder="22" />
          <Field label="Country" placeholder="US" />
          <Field label="Team ID" placeholder="team-id" />
          <Field label="Rank" placeholder="Diamond" />
        </div>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          {players.slice(0,8).map((p,i)=> (
            <div key={i} className="rounded-2xl p-3 bg-white/5 border border-white/10">
              <div className="text-white font-semibold text-sm truncate">{p.player_name || 'Player'}</div>
              <div className="text-white/60 text-xs">{p.rank || 'Rank'}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <PanelHeader icon={Shield} title="Teams" subtitle="Create teams" color="bg-gradient-to-br from-teal-300 to-emerald-400" />
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <Field label="Team Name" placeholder="Phoenix" />
          <Field label="Logo URL" placeholder="https://..." />
          <Field label="Country" placeholder="US" />
          <Field label="Members (ids)" placeholder="id1,id2" />
          <Field label="Coach" placeholder="Coach Name" />
        </div>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          {teams.slice(0,8).map((t,i)=> (
            <div key={i} className="rounded-2xl p-3 bg-white/5 border border-white/10">
              <div className="text-white font-semibold text-sm truncate">{t.team_name || 'Team'}</div>
              <div className="text-white/60 text-xs">{t.country || 'Country'}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <PanelHeader icon={CalendarPlus} title="Tournaments" subtitle="Schedule tournaments" color="bg-gradient-to-br from-yellow-300 to-rose-400" />
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <Field label="Name" placeholder="Summer Showdown" />
          <Field label="Game" placeholder="Game ID or name" />
          <Field label="Format" placeholder="BO3" />
          <Field label="Start Date" placeholder="2025-01-10" />
          <Field label="End Date" placeholder="2025-01-12" />
          <Field label="Prize Pool ($)" placeholder="50000" />
          <Field label="Teams Limit" placeholder="16" />
          <Field label="Status" placeholder="planned" />
        </div>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          {tournaments.slice(0,8).map((t,i)=> (
            <div key={i} className="rounded-2xl p-3 bg-white/5 border border-white/10">
              <div className="text-white font-semibold text-sm truncate">{t.tournament_name || 'Tournament'}</div>
              <div className="text-white/60 text-xs">{t.status || 'Status'}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <PanelHeader icon={Sword} title="Matches" subtitle="Create matches" color="bg-gradient-to-br from-pink-300 to-fuchsia-400" />
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <Field label="Match ID" placeholder="M-001" />
          <Field label="Tournament ID" placeholder="T-001" />
          <Field label="Team A" placeholder="Team A id" />
          <Field label="Team B" placeholder="Team B id" />
          <Field label="Schedule Time" placeholder="2025-01-10T14:00:00Z" />
          <Field label="Score" placeholder="2-1" />
          <Field label="Winner" placeholder="Team A" />
        </div>
        <div className="mt-4 grid grid-cols-3 md:grid-cols-6 gap-3">
          {[...Array(6)].map((_,i)=> (
            <div key={i} className="rounded-2xl h-20 bg-white/5 border border-white/10 grid place-items-center text-white/60 text-sm">Slot</div>
          ))}
        </div>
      </Card>
    </section>
  )
}
