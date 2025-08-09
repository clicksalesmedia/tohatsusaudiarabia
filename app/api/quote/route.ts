import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const required = ['fullName', 'phone', 'email', 'city', 'engineType', 'powerRange', 'usage', 'engineCount', 'vesselType', 'timeline', 'priority', 'preferredContact']
    for (const field of required) {
      if (!data?.[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
      }
    }

    const lead = await prisma.quoteLead.create({
      data: {
        fullName: data.fullName,
        phone: data.phone,
        email: data.email,
        city: data.city,
        engineType: data.engineType,
        powerRange: data.powerRange,
        usage: data.usage,
        engineCount: data.engineCount,
        vesselType: data.vesselType,
        vesselLength: data.vesselLength ?? null,
        vesselYear: data.vesselYear ?? null,
        currentEngine: data.currentEngine ?? null,
        timeline: data.timeline,
        budget: data.budget ?? null,
        priority: data.priority,
        additionalRequirements: data.additionalRequirements ?? null,
        previousExperience: data.previousExperience ?? null,
        preferredContact: data.preferredContact,
      },
    })

    return NextResponse.json({ success: true, leadId: lead.id })
  } catch (error) {
    console.error('Quote POST error', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}


