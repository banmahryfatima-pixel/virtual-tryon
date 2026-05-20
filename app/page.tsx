'use client'

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
      <div style={{ borderBottom: '1px solid #000', padding: '24px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '20px', fontWeight: '700', color: '#000', margin: 0 }}>TryOn AI</h1>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <a href="/pricing" style={{ fontSize: '14px', color: '#000', textDecoration: 'none' }}>For Stores</a>
          <a href="/tryon" style={{ fontSize: '14px', color: '#fff', backgroundColor: '#000', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none' }}>Try Now</a>
        </div>
      </div>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '100px 20px 60px', textAlign: 'center' }}>
        <p style={{ fontSize: '13px', fontWeight: '600', color: '#000', letterSpacing: '2px', marginBottom: '24px' }}>AI-POWERED FASHION</p>
        <h2 style={{ fontSize: '56px', fontWeight: '700', color: '#000', lineHeight: '1.1', marginBottom: '24px' }}>See how any outfit looks on you</h2>
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '48px', lineHeight: '1.6' }}>Upload your photo and any garment — our AI shows you the result in seconds.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', maxWidth: '500px', margin: '0 auto 80px' }}>
          <a href="/tryon" style={{ display: 'block', backgroundColor: '#000', color: '#fff', padding: '16px', borderRadius: '8px', textDecoration: 'none', fontSize: '15px', fontWeight: '600' }}>Try it on myself</a>
          <a href="/pricing" style={{ display: 'block', backgroundColor: '#fff', color: '#000', padding: '16px', borderRadius: '8px', textDecoration: 'none', fontSize: '15px', fontWeight: '600', border: '1px solid #000' }}>I own a store</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px', borderTop: '1px solid #eee', paddingTop: '60px', marginBottom: '80px' }}>
          <div>
            <p style={{ fontSize: '36px', fontWeight: '700', color: '#000', margin: '0 0 8px' }}>3s</p>
            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>Average result time</p>
          </div>
          <div>
            <p style={{ fontSize: '36px', fontWeight: '700', color: '#000', margin: '0 0 8px' }}>40%</p>
            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>Fewer returns</p>
          </div>
          <div>
            <p style={{ fontSize: '36px', fontWeight: '700', color: '#000', margin: '0 0 8px' }}>100%</p>
            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>AI powered</p>
          </div>
        </div>
        <h3 style={{ fontSize: '28px', fontWeight: '700', color: '#000', marginBottom: '40px' }}>How it works</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px', marginBottom: '80px' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '32px', margin: '0 0 16px' }}>📸</p>
            <p style={{ fontSize: '15px', fontWeight: '600', color: '#000', margin: '0 0 8px' }}>Upload your photo</p>
            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>A clear full-body photo works best</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '32px', margin: '0 0 16px' }}>👗</p>
            <p style={{ fontSize: '15px', fontWeight: '600', color: '#000', margin: '0 0 8px' }}>Choose a garment</p>
            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>Upload any clothing item photo</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '32px', margin: '0 0 16px' }}>✨</p>
            <p style={{ fontSize: '15px', fontWeight: '600', color: '#000', margin: '0 0 8px' }}>See the result</p>
            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>AI merges them instantly</p>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #eee', padding: '24px 40px', textAlign: 'center' }}>
        <p style={{ fontSize: '14px', color: '#999', margin: 0 }}>2026 TryOn AI</p>
      </div>
    </main>
  )
}