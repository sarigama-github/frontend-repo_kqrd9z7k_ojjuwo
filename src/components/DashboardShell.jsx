import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

export default function DashboardShell({ children }){
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex gap-6">
          <Sidebar />
          <main className="flex-1 py-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
