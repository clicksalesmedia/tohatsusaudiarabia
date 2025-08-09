import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

interface Props { params: { id: string } }

export default async function LeadDetailPage({ params }: Props) {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/admin/login')

  const lead = await prisma.quoteLead.findUnique({ where: { id: params.id } })
  if (!lead) {
    redirect('/admin/leads')
  }

  const rows: Array<[string, string | null | undefined]> = [
    ['Full Name', lead.fullName],
    ['Email', lead.email],
    ['Phone', lead.phone],
    ['City', lead.city],
    ['Engine Type', lead.engineType],
    ['Power Range', lead.powerRange],
    ['Usage', lead.usage],
    ['Engine Count', lead.engineCount],
    ['Vessel Type', lead.vesselType],
    ['Vessel Length', lead.vesselLength],
    ['Vessel Year', lead.vesselYear],
    ['Current Engine', lead.currentEngine],
    ['Timeline', lead.timeline],
    ['Budget', lead.budget],
    ['Priority', lead.priority],
    ['Previous Experience', lead.previousExperience],
    ['Preferred Contact', lead.preferredContact],
    ['Additional Requirements', lead.additionalRequirements],
    ['Created At', new Date(lead.createdAt).toLocaleString()],
  ]

  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm">
      <h2 className="text-xl font-bold text-[#181b39] mb-4">Lead Details</h2>
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


