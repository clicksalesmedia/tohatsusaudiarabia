import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function LeadsPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/admin/login')

  const leads = await prisma.quoteLead.findMany({ orderBy: { createdAt: 'desc' } })

  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-[#181b39]">Leads (Quotes)</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-gray-600 border-b">
              <th className="py-2 pr-4">Name</th>
              <th className="py-2 pr-4">Email</th>
              <th className="py-2 pr-4">Phone</th>
              <th className="py-2 pr-4">City</th>
              <th className="py-2 pr-4">Engine</th>
              <th className="py-2 pr-4">Power</th>
              <th className="py-2 pr-4">Priority</th>
              <th className="py-2 pr-4">Created</th>
              <th className="py-2 pr-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((l) => (
              <tr key={l.id} className="border-b align-top">
                <td className="py-2 pr-4 font-medium">{l.fullName}</td>
                <td className="py-2 pr-4">{l.email}</td>
                <td className="py-2 pr-4">{l.phone}</td>
                <td className="py-2 pr-4">{l.city}</td>
                <td className="py-2 pr-4">{l.engineType}</td>
                <td className="py-2 pr-4">{l.powerRange}</td>
                <td className="py-2 pr-4">{l.priority}</td>
                <td className="py-2 pr-4 text-gray-500">{new Date(l.createdAt).toLocaleString()}</td>
                <td className="py-2 pr-4">
                  <Link href={`/admin/leads/${l.id}`} className="px-3 py-1 rounded-md bg-[#181b39] text-white">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}


