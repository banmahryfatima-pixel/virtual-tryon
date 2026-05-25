'use client'

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'sans-serif', direction: 'rtl' }}>
      <div style={{ borderBottom: '1px solid #000', padding: '24px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '20px', fontWeight: '700', color: '#000', margin: 0 }}>Vtry</h1>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <a href="/pricing" style={{ fontSize: '14px', color: '#000', textDecoration: 'none' }}>للمتاجر</a>
          <a href="/tryon" style={{ fontSize: '14px', color: '#fff', backgroundColor: '#000', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none' }}>جربي الآن</a>
        </div>
      </div>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '100px 20px 60px', textAlign: 'center' }}>
        <p style={{ fontSize: '13px', fontWeight: '600', color: '#666', letterSpacing: '2px', marginBottom: '24px' }}>الذكاء الاصطناعي للأزياء</p>
        <h2 style={{ fontSize: '52px', fontWeight: '700', color: '#000', lineHeight: '1.2', marginBottom: '24px' }}>
          شوفي أي قطعة<br />كيف تبدو <span style={{ borderBottom: '3px solid #000' }}>عليكِ</span>
        </h2>
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '48px', lineHeight: '1.6' }}>
          ارفعي صورتكِ وأي قطعة ملابس — الذكاء الاصطناعي يظهر لكِ النتيجة في ثوانٍ. بدون تجربة. بدون تخمين.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', maxWidth: '500px', margin: '0 auto 80px' }}>
          <a href="/tryon" style={{ display: 'block', backgroundColor: '#000', color: '#fff', padding: '16px', borderRadius: '8px', textDecoration: 'none', fontSize: '15px', fontWeight: '600' }}>جربي الآن ←</a>
          <a href="/pricing" style={{ display: 'block', backgroundColor: '#fff', color: '#000', padding: '16px', borderRadius: '8px', textDecoration: 'none', fontSize: '15px', fontWeight: '600', border: '1px solid #000' }}>أنا صاحب متجر ←</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px', borderTop: '1px solid #eee', paddingTop: '60px', marginBottom: '80px' }}>
          <div>
            <p style={{ fontSize: '36px', fontWeight: '700', color: '#000', margin: '0 0 8px' }}>3s</p>
            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>متوسط وقت النتيجة</p>
          </div>
          <div>
            <p style={{ fontSize: '36px', fontWeight: '700', color: '#000', margin: '0 0 8px' }}>40%</p>
            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>تقليل المرتجعات</p>
          </div>
          <div>
            <p style={{ fontSize: '36px', fontWeight: '700', color: '#000', margin: '0 0 8px' }}>100%</p>
            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>مدعوم بالذكاء الاصطناعي</p>
          </div>
        </div>
        <h3 style={{ fontSize: '28px', fontWeight: '700', color: '#000', marginBottom: '40px' }}>كيف يعمل</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px', marginBottom: '80px' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '32px', margin: '0 0 16px' }}>📸</p>
            <p style={{ fontSize: '15px', fontWeight: '600', color: '#000', margin: '0 0 8px' }}>ارفعي صورتكِ</p>
            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>صورة واضحة كاملة الجسم</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '32px', margin: '0 0 16px' }}>👗</p>
            <p style={{ fontSize: '15px', fontWeight: '600', color: '#000', margin: '0 0 8px' }}>اختاري القطعة</p>
            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>ارفعي صورة أي ملابس</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '32px', margin: '0 0 16px' }}>✨</p>
            <p style={{ fontSize: '15px', fontWeight: '600', color: '#000', margin: '0 0 8px' }}>شوفي النتيجة</p>
            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>الذكاء الاصطناعي يدمجهم فوراً</p>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #eee', padding: '24px 40px', textAlign: 'center' }}>
        <p style={{ fontSize: '14px', color: '#999', margin: 0 }}>2026 Vtry — تجربة الأزياء بالذكاء الاصطناعي</p>
      </div>
    </main>
  )
}