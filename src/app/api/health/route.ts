import { NextResponse } from 'next/server'
import { getBuildInfo } from '@/lib/build-info'

export const dynamic = 'force-dynamic'

export async function GET(_req: Request) {
  const body = {
    status: 'ok',
    build: getBuildInfo(),
  }
  return NextResponse.json(body, { status: 200 })
}

