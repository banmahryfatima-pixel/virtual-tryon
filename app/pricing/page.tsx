'use client'
import { useState } from 'react'

export default function Pricing() {
  const [apiKey, setApiKey] = useState('')
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    if (apiKey) {
      setSaved(true)
    }
  }

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>

      {/* Header */}
      <div style={{ borderBottom: '1px solid #000', padding: '24px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ fontSize: '20px', fontWeight: '700', color: '#000', textDecoration: 'none' }}>TryOn AI</a>
        <a href="/tryon" style={{ fontSize: '14px', color: '#fff', backgroundColor: '#000', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none' }}>Try Now</a>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 20px' }}>

        {/* Title */}
        <p style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '2px', textAlign: 'center', marginBottom: '16px' }}>FOR STORE OWNERS</p>
        <h2 style={{ fontSize: '42px', fontWeight: '700', color: '#000', textAlign: 'center', marginBottom: '16px' }}>Add AI Try-On to your store</h2>
        <p style={{ fontSize: '16px', color: '#666', textAlign: 'center', marginBottom: '60px' }}>Reduce returns by 40% — your customers try before they buy</p>

        {/* Plans */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '60px' }}>

          <div style={{ border: '1px solid #ddd', borderRadius: '12px', padding: '36px' }}>
            <p style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '1px', color: '#666', margin: '0 0 16px' }}>BASIC</p>
            <p style={{ fontSize: '42px', fontWeight: '700', color: '#000', margin: '0 0 4px' }}>$49</p>
            <p style={{ fontSize: '14px', color: '#666', margin: '0 0 32px' }}>per month</p>
            <div style={{ borderTop: '1px solid #eee', paddingTop: '24px', marginBottom: '32px' }}>
              <p style={{ fontSize: '14px', color: '#333', margin: '0 0 12px' }}>✓ 500 try-ons / month</p>
              <p style={{ fontSize: '14px', color: '#333', margin: '0 0 12px' }}>✓ Your own API key</p>
              <p style={{ fontSize: '14px', color: '#333', margin: '0 0 12px' }}>✓ Email support</p>
              <p style={{ fontSize: '14px', color: '#333', margin: 0 }}>✓ Works on Salla & Zid</p>
            </div>
            <button style={{ width: '100%', backgroundColor: '#fff', color: '#000', border: '1px solid #000', padding: '14px', fontSize: '14px', fontWeight: '600', borderRadius: '8px', cursor: 'pointer' }}>Get Started</button>
          </div>

          <div style={{ border: '2px solid #000', borderRadius: '12px', padding: '36px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#000', color: '#fff', padding: '4px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>POPULAR</div>
            <p style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '1px', color: '#666', margin: '0 0 16px' }}>PRO</p>
            <p style={{ fontSize: '42px', fontWeight: '700', color: '#000', margin: '0 0 4px' }}>$99</p>
            <p style={{ fontSize: '14px', color: '#666', margin: '0 0 32px' }}>per month</p>
            <div style={{ borderTop: '1px solid #eee', paddingTop: '24px', marginBottom: '32px' }}>
              <p style={{ fontSize: '14px', color: '#333', margin: '0 0 12px' }}>✓ Unlimited try-ons</p>
              <p style={{ fontSize: '14px', color: '#333', margin: '0 0 12px' }}>✓ Your own API key</p>
              <p style={{ fontSize: '14px', color: '#333', margin: '0 0 12px' }}>✓ Dashboard analytics</p>
              <p style={{ fontSize: '14px', color: '#333', margin: '0 0 12px' }}>✓ Priority support</p>
              <p style={{ fontSize: '14px', color: '#333', margin: 0 }}>✓ Works on Salla & Zid</p>
            </div>
            <button style={{ width: '100%', backgroundColor: '#000', color: '#fff', border: 'none', padding: '14px', fontSize: '14px', fontWeight: '600', borderRadius: '8px', cursor: 'pointer' }}>Get Started</button>
          </div>

        </div>

        {/* BYOK */}
        <div style={{ backgroundColor: '#f9f9f9', borderRadius: '12px', padding: '40px', marginBottom: '60px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#000', marginBottom: '8px' }}>Enter your API Key</h3>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '24px' }}>Get your key from replicate.com — you only pay for what you use (~$0.005 per try-on)</p>
          <input type="text" placeholder="r8_xxxxxxxxxxxxxxxxxxxx" value={apiKey} onChange={(e) => setApiKey(e.target.value)} style={{ width: '100%', border: '1px solid #ddd', borderRadius: '8px', padding: '14px', fontSize: '14px', marginBottom: '16px', boxSizing: 'border-box' as const }} />
          <button onClick={handleSave} style={{ backgroundColor: '#000', color: '#fff', border: 'none', padding: '14px 32px', fontSize: '14px', fontWeight: '600', borderRadius: '8px', cursor: 'pointer' }}>
            {saved ? '✓ Saved!' : 'Save API Key'}
          </button>
        </div>

        {/* FAQ */}
        <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#000', marginBottom: '32px', textAlign: 'center' }}>Common questions</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '24px' }}>
            <p style={{ fontSize: '15px', fontWeight: '600', color: '#000', margin: '0 0 8px' }}>Does it work with Salla and Zid?</p>
            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>Yes — we provide a simple widget you add to your product pages in minutes.</p>
          </div>
          <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '24px' }}>
            <p style={{ fontSize: '15px', fontWeight: '600', color: '#000', margin: '0 0 8px' }}>Who pays for the AI usage?</p>
            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>You do — directly to Replicate. Each try-on costs ~$0.005. 1000 try-ons = $5.</p>
          </div>
          <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '24px' }}>
            <p style={{ fontSize: '15px', fontWeight: '600', color: '#000', margin: '0 0 8px' }}>Can I cancel anytime?</p>
            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>Yes — no contracts, cancel whenever you want.</p>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div style={{ borderTop: '1px solid #eee', padding: '24px 40px', textAlign: 'center' }}>
        <p style={{ fontSize: '14px', color: '#999', margin: 0 }}>2026 TryOn AI</p>
      </div>

    </main>
  )
}