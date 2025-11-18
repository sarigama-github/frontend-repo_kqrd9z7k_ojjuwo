import React from 'react'
import { Line, Bar, Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Tooltip, Legend } from 'chart.js'
import { BarChart3 } from 'lucide-react'

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Tooltip, Legend)

const Card = ({ children }) => (
  <div className="rounded-3xl p-5 bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl">
    {children}
  </div>
)

export default function Analytics(){
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{ label: 'Tournament Participation', backgroundColor: '#f472b6', data: [12, 19, 13, 25, 18, 30] }]
  }
  const lineData = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [{ label: 'Peak Active Players', borderColor: '#34d399', backgroundColor: 'rgba(52,211,153,0.25)', data: [120, 200, 180, 240, 260, 300, 220], tension: 0.4 }]
  }
  const doughnutData = {
    labels: ['FPS', 'MOBA', 'Fighting', 'Sports'],
    datasets: [{ data: [40, 30, 20, 10], backgroundColor: ['#60a5fa','#a78bfa','#f472b6','#34d399'] }]
  }

  return (
    <section id="analytics" className="max-w-7xl mx-auto px-4 mt-8 grid lg:grid-cols-3 gap-6">
      <Card>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl grid place-items-center bg-gradient-to-br from-sky-300 to-cyan-400 text-slate-900"><BarChart3 size={20}/></div>
          <div className="text-white font-bold">Tournament Participation</div>
        </div>
        <Bar data={barData} options={{ plugins: { legend: { display: false } }, scales: { y: { ticks: { color: '#fff' } }, x: { ticks: { color: '#fff' } } } }} />
      </Card>

      <Card>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl grid place-items-center bg-gradient-to-br from-emerald-300 to-teal-400 text-slate-900"><BarChart3 size={20}/></div>
          <div className="text-white font-bold">Peak Active Players</div>
        </div>
        <Line data={lineData} options={{ plugins: { legend: { display: false } }, scales: { y: { ticks: { color: '#fff' } }, x: { ticks: { color: '#fff' } } } }} />
      </Card>

      <Card>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl grid place-items-center bg-gradient-to-br from-violet-300 to-fuchsia-400 text-slate-900"><BarChart3 size={20}/></div>
          <div className="text-white font-bold">Top Games Played</div>
        </div>
        <Doughnut data={doughnutData} options={{ plugins: { legend: { labels: { color: '#fff' } } } }} />
      </Card>
    </section>
  )
}
