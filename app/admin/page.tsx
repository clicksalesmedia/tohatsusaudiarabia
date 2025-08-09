import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function AdminHomePage() {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect('/admin/login')
  }

  const [contacts, leads] = await Promise.all([
    prisma.contact.findMany({ orderBy: { createdAt: 'desc' }, take: 10 }),
    prisma.quoteLead.findMany({ orderBy: { createdAt: 'desc' }, take: 10 }),
  ])

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#181b39]">Overview</h2>
        <div className="text-sm text-gray-500">Signed in</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="bg-white p-6 rounded-2xl border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-[#181b39]">Recent Contacts</h3>
            <Link href="/admin/contacts" className="text-sm text-[#181b39] underline">View all</Link>
          </div>
          <div className="divide-y">
            {contacts.map((c) => (
              <div key={c.id} className="py-3">
                <div className="font-medium">{c.name} <span className="text-gray-400">({c.email})</span></div>
                <div className="text-sm text-gray-600 line-clamp-2">{c.message}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white p-6 rounded-2xl border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-[#181b39]">Recent Leads</h3>
            <Link href="/admin/leads" className="text-sm text-[#181b39] underline">View all</Link>
          </div>
          <div className="divide-y">
            {leads.map((l) => (
              <div key={l.id} className="py-3">
                <div className="font-medium">{l.fullName} <span className="text-gray-400">({l.email})</span></div>
                <div className="text-sm text-gray-600">{l.city} • {l.engineType} • {l.powerRange}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}


