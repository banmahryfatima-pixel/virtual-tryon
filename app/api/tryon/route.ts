import { NextRequest, NextResponse } from 'next/server'
import { Client } from '@gradio/client'

export async function POST(request: NextRequest) {
  try {
    const { personImage, garmentImage } = await request.json()

    const client = await Client.connect('yisol/IDM-VTON')
    
    const result = await client.predict('/tryon', {
      dict: { background: personImage, layers: [], composite: null },
      garm_img: garmentImage,
      garment_des: 'clothing',
      is_checked: true,
      is_checked_crop: false,
      denoise_steps: 30,
      seed: 42,
    })

    return NextResponse.json({ result: result.data[0] })

  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}s