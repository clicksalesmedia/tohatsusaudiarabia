import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

interface Props { params: { id: string } }

export default async function ContactDetailPage({ params }: Props) {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/admin/login')

  const contact = await prisma.contact.findUnique({ where: { id: params.id } })
  if (!contact) redirect('/admin/contacts')

  const rows: Array<[string, string | null | undefined]> = [
    ['Name', contact.name],
    ['Email', contact.email],
    ['Phone', contact.phone],
    ['Engine Type', contact.engineType],
    ['Message', contact.message],
    ['Created At', new Date(contact.createdAt).toLocaleString()],
  ]

  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm">
      <h2 className="text-xl font-bold text-[#181b39] mb-4">Contact Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {rows.map(([label, value]) => (
          <div key={label} className="border rounded-lg p-3">
            <div className="text-xs uppercase text-gray-500">{label}</div>
            <div className="text-sm text-[#181b39] whitespace-pre-wrap break-words">{value ?? '-'}</div>
          </div>
        ))}
      </div>
    </div>
  )
}


