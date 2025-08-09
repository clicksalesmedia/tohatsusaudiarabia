import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, engineType, message } = body ?? {}

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        phone: phone ?? null,
        engineType: engineType ?? null,
        message,
      },
    })

    return NextResponse.json({ success: true, contactId: contact.id })
  } catch (error) {
    console.error('Contact POST error', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}


