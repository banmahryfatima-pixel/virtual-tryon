'use client'
import { useState } from 'react'

export default function TryOn() {
  const [personImage, setPersonImage] = useState<string | null>(null)
  const [garmentImage, setGarmentImage] = useState<string | null>(null)
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'person' | 'garment') => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        if (type === 'person') setPersonImage(reader.result as string)
        else setGarmentImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleTryOn = async () => {
    if (!personImage || !garmentImage) return
    setLoading(true)
    setTimeout(() => {
      setResult(personImage)
      setLoading(false)
    }, 2000)
  }

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
      <div style={{ borderBottom: '1px solid #000', padding: '24px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ fontSize: '20px', fontWeight: '700', color: '#000', textDecoration: 'none' }}>TryOn AI</a>
        <a href="/pricing" style={{ fontSize: '14px', color: '#000', textDecoration: 'none' }}>For Stores</a>
      </div>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 20px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#000', marginBottom: '12px', textAlign: 'center' }}>See how it looks on you</h2>
        <p style={{ fontSize: '16px', color: '#666', textAlign: 'center', marginBottom: '60px' }}>Upload your photo and a garment — AI will show you the result instantly</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '40px' }}>
          <div>
            <p style={{ fontSize: '14px', fontWeight: '600', color: '#000', marginBottom: '12px' }}>Your Photo</p>
            <label style={{ display: 'block', border: '1px solid #000', borderRadius: '8px', padding: '40px 20px', textAlign: 'center', cursor: 'pointer' }}>
              {personImage ? (
                <img src={personImage} alt="person" style={{ maxHeight: '200px', margin: '0 auto', display: 'block' }} />
              ) : (
                <div>
                  <p style={{ fontSize: '32px', margin: '0 0 8px' }}>+</p>
                  <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>Upload your photo</p>
                </div>
              )}
              <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'person')} style={{ display: 'none' }} />
            </label>
          </div>
          <div>
            <p style={{ fontSize: '14px', fontWeight: '600', color: '#000', marginBottom: '12px' }}>Garment Photo</p>
            <label style={{ display: 'block', border: '1px solid #000', borderRadius: '8px', padding: '40px 20px', textAlign: 'center', cursor: 'pointer' }}>
              {garmentImage ? (
                <img src={garmentImage} alt="garment" style={{ maxHeight: '200px', margin: '0 auto', display: 'block' }} />
              ) : (
                <div>
                  <p style={{ fontSize: '32px', margin: '0 0 8px' }}>+</p>
                  <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>Upload garment</p>
                </div>
              )}
              <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'garment')} style={{ display: 'none' }} />
            </label>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <button onClick={handleTryOn} disabled={!personImage || !garmentImage || loading} style={{ backgroundColor: '#000', color: '#fff', border: 'none', padding: '16px 48px', fontSize: '16px', fontWeight: '600', borderRadius: '8px', cursor: 'pointer', opacity: personImage && garmentImage ? 1 : 0.4 }}>
            {loading ? 'Processing... ⏳' : 'Try it on →'}
          </button>
        </div>
        {result && (
          <div style={{ textAlign: 'center', borderTop: '1px solid #eee', paddingTop: '40px' }}>
            <p style={{ fontSize: '18px', fontWeight: '600', color: '#000', marginBottom: '20px' }}>Result</p>
            <img src={result} alt="result" style={{ maxWidth: '400px', width: '100%', borderRadius: '8px' }} />
          </div>
        )}
      </div>
    </main>
  )
}