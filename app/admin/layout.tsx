import { ReactNode } from 'react'
import Link from 'next/link'

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="grid grid-cols-12 gap-0 min-h-screen">
        <aside className="col-span-12 md:col-span-3 lg:col-span-2 bg-white border-r">
          <div className="p-6 border-b">
            <Link href="/admin" className="block text-xl font-bold text-[#181b39]">Tohatsu Admin</Link>
            <p className="text-xs text-gray-500">Control panel</p>
          </div>
          <nav className="p-4 space-y-1">
            <Link href="/admin" className="block px-3 py-2 rounded-md text-sm font-medium text-[#181b39] hover:bg-slate-100">Overview</Link>
            <Link href="/admin/contacts" className="block px-3 py-2 rounded-md text-sm font-medium text-[#181b39] hover:bg-slate-100">Contacts</Link>
            <Link href="/admin/leads" className="block px-3 py-2 rounded-md text-sm font-medium text-[#181b39] hover:bg-slate-100">Leads</Link>
            <a href="/" className="block px-3 py-2 rounded-md text-sm font-medium text-[#181b39]/70 hover:bg-slate-100">Back to site</a>
          </nav>
        </aside>
        <main className="col-span-12 md:col-span-9 lg:col-span-10">
          <header className="sticky top-0 z-10 bg-white border-b px-6 py-4 flex items-center justify-between">
            <div className="font-semibold text-[#181b39]">Dashboard</div>
            <form action="/api/auth/signout" method="post">
              <button className="text-sm px-3 py-2 rounded-md bg-[#181b39] text-white">Sign out</button>
            </form>
          </header>
          <div className="p-6 max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}


