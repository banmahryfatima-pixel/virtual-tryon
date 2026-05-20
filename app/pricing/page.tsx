'use client'
import { useState } from 'react'

export default function Pricing() {
  const [apiKey, setApiKey] = useState('')
  const [saved, setSaved] = useState(false)
  const [lang, setLang] = useState<'ar' | 'en'>('ar')

  const t = {
    ar: {
      title: 'لأصحاب المتاجر',
      subtitle: 'أضف تجربة الملابس بالذكاء الاصطناعي لمتجرك',
      desc: 'قللي المرتجعات 40% — عميلاتك يجربن قبل الشراء',
      starter: 'مبتدئ',
      growth: 'نمو',
      pro: 'احترافي',
      month: '/شهر',
      up200: 'حتى 200 تجربة شهرياً',
      up1000: 'حتى 1000 تجربة شهرياً',
      unlimited: 'تجربات غير محدودة',
      apikey: 'مفتاحك الخاص',
      support: 'دعم عبر البريد',
      priority: 'دعم أولوية',
      analytics: 'إحصائيات متقدمة',
      salla: 'يعمل على سلة وزد',
      popular: 'الأكثر طلباً',
      start: 'ابدأ الآن',
      keyTitle: 'أدخل مفتاح API',
      keyDesc: 'احصلي على مفتاحك من replicate.com — تدفعين فقط على الاستخدام (~0.02 ريال لكل تجربة)',
      save: 'حفظ',
      saved: '✓ تم الحفظ!',
      faqTitle: 'أسئلة شائعة',
      q1: 'هل يعمل مع سلة وزد؟',
      a1: 'نعم — نوفر لكِ كود بسيط تضيفينه لصفحات منتجاتك في دقائق.',
      q2: 'من يدفع تكلفة الذكاء الاصطناعي؟',
      a2: 'أنتِ تدفعين مباشرة لـ Replicate. كل تجربة تكلف ~0.02 ريال. 1000 تجربة = 20 ريال فقط.',
      q3: 'هل يمكن الإلغاء في أي وقت؟',
      a3: 'نعم — لا عقود، ألغي متى تريدين.',
    },
    en: {
      title: 'For Store Owners',
      subtitle: 'Add AI Try-On to your store',
      desc: 'Reduce returns by 40% — your customers try before they buy',
      starter: 'Starter',
      growth: 'Growth',
      pro: 'Pro',
      month: '/mo',
      up200: 'Up to 200 try-ons/month',
      up1000: 'Up to 1000 try-ons/month',
      unlimited: 'Unlimited try-ons',
      apikey: 'Your own API key',
      support: 'Email support',
      priority: 'Priority support',
      analytics: 'Dashboard analytics',
      salla: 'Works on Salla & Zid',
      popular: 'Most Popular',
      start: 'Get Started',
      keyTitle: 'Enter your API Key',
      keyDesc: 'Get your key from replicate.com — you only pay for what you use (~$0.005 per try-on)',
      save: 'Save',
      saved: '✓ Saved!',
      faqTitle: 'Common Questions',
      q1: 'Does it work with Salla and Zid?',
      a1: 'Yes — we provide a simple widget you add to your product pages in minutes.',
      q2: 'Who pays for the AI usage?',
      a2: 'You do — directly to Replicate. Each try-on costs ~$0.005. 1000 try-ons = $5.',
      q3: 'Can I cancel anytime?',
      a3: 'Yes — no contracts, cancel whenever you want.',
    }
  }

  const c = t[lang]

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'sans-serif', direction: lang === 'ar' ? 'rtl' : 'ltr' }}>

      {/* Header */}
      <div style={{ borderBottom: '1px solid #000', padding: '24px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ fontSize: '20px', fontWeight: '700', color: '#000', textDecoration: 'none' }}>TryOn AI</a>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} style={{ border: '1px solid #000', backgroundColor: '#fff', padding: '6px 14px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px' }}>
            {lang === 'ar' ? 'EN' : 'عربي'}
          </button>
          <a href="/tryon" style={{ fontSize: '14px', color: '#fff', backgroundColor: '#000', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none' }}>
            {lang === 'ar' ? 'جربي الآن' : 'Try Now'}
          </a>
        </div>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 20px' }}>

        {/* Title */}
        <p style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '2px', textAlign: 'center', marginBottom: '16px', color: '#666' }}>
          {c.title.toUpperCase()}
        </p>
        <h2 style={{ fontSize: '42px', fontWeight: '700', color: '#000', textAlign: 'center', marginBottom: '16px' }}>{c.subtitle}</h2>
        <p style={{ fontSize: '16px', color: '#666', textAlign: 'center', marginBottom: '60px' }}>{c.desc}</p>

        {/* Plans */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '60px' }}>

          {/* Starter */}
          <div style={{ border: '1px solid #ddd', borderRadius: '12px', padding: '32px' }}>
            <p style={{ fontSize: '13px', fontWeight: '600', color: '#666', margin: '0 0 16px' }}>{c.starter}</p>
            <p style={{ fontSize: '36px', fontWeight: '700', color: '#000', margin: '0 0 4px' }}>49</p>
            <p style={{ fontSize: '14px', color: '#666', margin: '0 0 24px' }}>ريال{c.month}</p>
            <div style={{ borderTop: '1px solid #eee', paddingTop: '20px', marginBottom: '24px' }}>
              <p style={{ fontSize: '13px', color: '#333', margin: '0 0 10px' }}>✓ {c.up200}</p>
              <p style={{ fontSize: '13px', color: '#333', margin: '0 0 10px' }}>✓ {c.apikey}</p>
              <p style={{ fontSize: '13px', color: '#333', margin: '0 0 10px' }}>✓ {c.support}</p>
              <p style={{ fontSize: '13px', color: '#333', margin: 0 }}>✓ {c.salla}</p>
            </div>
            <button style={{ width: '100%', backgroundColor: '#fff', color: '#000', border: '1px solid #000', padding: '12px', fontSize: '14px', fontWeight: '600', borderRadius: '8px', cursor: 'pointer' }}>{c.start}</button>
          </div>

          {/* Growth */}
          <div style={{ border: '2px solid #000', borderRadius: '12px', padding: '32px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#000', color: '#fff', padding: '4px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: '600', whiteSpace: 'nowrap' }}>{c.popular}</div>
            <p style={{ fontSize: '13px', fontWeight: '600', color: '#666', margin: '0 0 16px' }}>{c.growth}</p>
            <p style={{ fontSize: '36px', fontWeight: '700', color: '#000', margin: '0 0 4px' }}>99</p>
            <p style={{ fontSize: '14px', color: '#666', margin: '0 0 24px' }}>ريال{c.month}</p>
            <div style={{ borderTop: '1px solid #eee', paddingTop: '20px', marginBottom: '24px' }}>
              <p style={{ fontSize: '13px', color: '#333', margin: '0 0 10px' }}>✓ {c.up1000}</p>
              <p style={{ fontSize: '13px', color: '#333', margin: '0 0 10px' }}>✓ {c.apikey}</p>
              <p style={{ fontSize: '13px', color: '#333', margin: '0 0 10px' }}>✓ {c.analytics}</p>
              <p style={{ fontSize: '13px', color: '#333', margin: '0 0 10px' }}>✓ {c.support}</p>
              <p style={{ fontSize: '13px', color: '#333', margin: 0 }}>✓ {c.salla}</p>
            </div>
            <button style={{ width: '100%', backgroundColor: '#000', color: '#fff', border: 'none', padding: '12px', fontSize: '14px', fontWeight: '600', borderRadius: '8px', cursor: 'pointer' }}>{c.start}</button>
          </div>

          {/* Pro */}
          <div style={{ border: '1px solid #ddd', borderRadius: '12px', padding: '32px' }}>
            <p style={{ fontSize: '13px', fontWeight: '600', color: '#666', margin: '0 0 16px' }}>{c.pro}</p>
            <p style={{ fontSize: '36px', fontWeight: '700', color: '#000', margin: '0 0 4px' }}>299</p>
            <p style={{ fontSize: '14px', color: '#666', margin: '0 0 24px' }}>ريال{c.month}</p>
            <div style={{ borderTop: '1px solid #eee', paddingTop: '20px', marginBottom: '24px' }}>
              <p style={{ fontSize: '13px', color: '#333', margin: '0 0 10px' }}>✓ {c.unlimited}</p>
              <p style={{ fontSize: '13px', color: '#333', margin: '0 0 10px' }}>✓ {c.apikey}</p>
              <p style={{ fontSize: '13px', color: '#333', margin: '0 0 10px' }}>✓ {c.analytics}</p>
              <p style={{ fontSize: '13px', color: '#333', margin: '0 0 10px' }}>✓ {c.priority}</p>
              <p style={{ fontSize: '13px', color: '#333', margin: 0 }}>✓ {c.salla}</p>
            </div>
            <button style={{ width: '100%', backgroundColor: '#fff', color: '#000', border: '1px solid #000', padding: '12px', fontSize: '14px', fontWeight: '600', borderRadius: '8px', cursor: 'pointer' }}>{c.start}</button>
          </div>

        </div>

        {/* BYOK */}
        <div style={{ backgroundColor: '#f9f9f9', borderRadius: '12px', padding: '40px', marginBottom: '60px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#000', marginBottom: '8px' }}>{c.keyTitle}</h3>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '24px' }}>{c.keyDesc}</p>
          <input type="text" placeholder="r8_xxxxxxxxxxxxxxxxxxxx" value={apiKey} onChange={(e) => setApiKey(e.target.value)} style={{ width: '100%', border: '1px solid #ddd', borderRadius: '8px', padding: '14px', fontSize: '14px', marginBottom: '16px', boxSizing: 'border-box' as const }} />
          <button onClick={() => { if (apiKey) setSaved(true) }} style={{ backgroundColor: '#000', color: '#fff', border: 'none', padding: '14px 32px', fontSize: '14px', fontWeight: '600', borderRadius: '8px', cursor: 'pointer' }}>
            {saved ? c.saved : c.save}
          </button>
        </div>

        {/* FAQ */}
        <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#000', marginBottom: '32px', textAlign: 'center' }}>{c.faqTitle}</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '24px' }}>
            <p style={{ fontSize: '15px', fontWeight: '600', color: '#000', margin: '0 0 8px' }}>{c.q1}</p>
            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>{c.a1}</p>
          </div>
          <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '24px' }}>
            <p style={{ fontSize: '15px', fontWeight: '600', color: '#000', margin: '0 0 8px' }}>{c.q2}</p>
            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>{c.a2}</p>
          </div>
          <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '24px' }}>
            <p style={{ fontSize: '15px', fontWeight: '600', color: '#000', margin: '0 0 8px' }}>{c.q3}</p>
            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>{c.a3}</p>
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