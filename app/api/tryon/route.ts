import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { personImage, garmentImage } = await request.json()

    if (!personImage || !garmentImage) {
      return NextResponse.json({ error: 'Missing images' }, { status: 400 })
    }

    return NextResponse.json({ result: personImage })

  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}