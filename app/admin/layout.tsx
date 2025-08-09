import { ReactNode } from 'react'

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto p-6">
        <header className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#181b39]">Admin Dashboard</h1>
          <a href="/" className="text-sm text-[#181b39]/70 underline">Back to site</a>
        </header>
        {children}
      </div>
    </div>
  )
}


