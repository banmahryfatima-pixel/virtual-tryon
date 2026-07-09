'use client';

export default function PricingPage() {
  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #fafaf8; font-family: 'DM Sans', sans-serif; }
        .page { min-height: 100vh; padding: 40px 60px; }
        .header { margin-bottom: 48px; }
        .header a { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700; letter-spacing: 3px; color: #0a0a0a; text-decoration: none; }
        .tag { font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #b8952a; margin-bottom: 16px; }
        .title { font-family: 'Playfair Display', serif; font-size: 48px; font-weight: 700; color: #0a0a0a; margin-bottom: 8px; }
        .subtitle { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 18px; font-weight: 300; color: #9a9a94; direction: rtl; margin-bottom: 60px; }
        
        .section-title { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 700; color: #0a0a0a; margin-bottom: 24px; padding-bottom: 12px; border-bottom: 1px solid #e8e8e4; }
        .section-title span { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 16px; font-weight: 300; color: #9a9a94; margin-right: 12px; }

        .payg-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; margin-bottom: 60px; }
        .payg-card { background: #fff; border: 1px solid #e8e8e4; padding: 28px; }
        .payg-card:hover { border-color: #b8952a; }
        .payg-price { font-family: 'Playfair Display', serif; font-size: 36px; font-weight: 700; color: #0a0a0a; }
        .payg-price span { font-size: 14px; color: #9a9a94; font-family: 'DM Sans', sans-serif; }
        .payg-desc { font-size: 13px; color: #5a5a56; margin: 8px 0 16px; }
        .payg-desc-ar { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 12px; color: #b8952a; direction: rtl; margin-bottom: 20px; }
        .payg-btn { width: 100%; padding: 12px; background: #0a0a0a; color: #fff; border: none; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; cursor: pointer; }
        .payg-btn:hover { background: #b8952a; }

        .plans { display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; background: #e8e8e4; border: 1px solid #e8e8e4; margin-bottom: 60px; }
        .plan { padding: 40px 32px; background: #fff; }
        .plan-featured { background: #0a0a0a !important; }
        .plan-badge { font-size: 9px; letter-spacing: 2px; text-transform: uppercase; background: #b8952a; color: #fff; padding: 4px 12px; display: inline-block; margin-bottom: 16px; }
        .plan-name { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #9a9a94; margin-bottom: 4px; }
        .plan-name-ar { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 15px; font-weight: 600; color: #0a0a0a; margin-bottom: 20px; direction: rtl; display: block; }
        .plan-featured .plan-name { color: rgba(255,255,255,0.5); }
        .plan-featured .plan-name-ar { color: #fff; }
        .plan-price { font-family: 'Playfair Display', serif; font-size: 44px; font-weight: 700; color: #0a0a0a; line-height: 1; display: block; }
        .plan-featured .plan-price { color: #fff; }
        .plan-price span { font-size: 14px; font-family: 'DM Sans', sans-serif; color: #9a9a94; }
        .plan-featured .plan-price span { color: rgba(255,255,255,0.5); }
        .plan-period { font-size: 12px; color: #9a9a94; margin: 4px 0 24px; display: block; }
        .plan-featured .plan-period { color: rgba(255,255,255,0.4); }
        .plan-feats { list-style: none; margin-bottom: 32px; }
        .plan-feats li { font-size: 13px; color: #5a5a56; padding: 8px 0; border-bottom: 1px solid #e8e8e4; display: flex; align-items: center; gap: 8px; }
        .plan-featured .plan-feats li { color: rgba(255,255,255,0.7); border-bottom-color: rgba(255,255,255,0.1); }
        .plan-feats li::before { content: '—'; color: #b8952a; flex-shrink: 0; }
        .plan-btn { width: 100%; padding: 13px; background: #0a0a0a; color: #fff; border: none; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; cursor: pointer; }
        .plan-btn:hover { background: #b8952a; }
        .plan-featured .plan-btn { background: #b8952a; }
        .plan-featured .plan-btn:hover { background: #fff; color: #0a0a0a; }

        .faq { margin-top: 40px; }
        .faq-title { font-family: 'Playfair Display', serif; font-size: 32px; font-weight: 700; color: #0a0a0a; margin-bottom: 32px; }
        .faq-item { border-bottom: 1px solid #e8e8e4; padding: 20px 0; }
        .faq-q { font-size: 15px; font-weight: 500; color: #0a0a0a; margin-bottom: 8px; }
        .faq-a { font-size: 13px; color: #5a5a56; line-height: 1.7; }

        @media (max-width: 900px) {
          .page { padding: 24px; }
          .payg-grid { grid-template-columns: 1fr; }
          .plans { grid-template-columns: 1fr; }
          .title { font-size: 32px; }
        }
      `}</style>

      <div className="page">
        <div className="header">
          <a href="/">← VTRY</a>
        </div>

        <p className="tag">Pricing — الأسعار</p>
        <h1 className="title">Simple, Transparent Pricing</h1>
        <p className="subtitle">ادفع فقط لما تستخدم — لا رسوم خفية</p>

        {/* PAY AS YOU GO */}
        <h2 className="section-title">Pay as you go <span>ادفع حسب الاستخدام</span></h2>
        <div className="payg-grid">
          {[
            { price: '$5', unit: '10 photos', desc: '10 professional AI photos', ar: '١٠ صور احترافية بالذكاء الاصطناعي' },
            { price: '$12', unit: '30 photos', desc: '30 professional AI photos', ar: '٣٠ صورة احترافية' },
            { price: '$15', unit: '10 videos', desc: '10 AI fashion videos for social media', ar: '١٠ فيديوهات للسوشيال ميديا' },
          ].map((item, i) => (
            <div key={i} className="payg-card">
              <div className="payg-price">{item.price} <span>/ {item.unit}</span></div>
              <p className="payg-desc">{item.desc}</p>
              <p className="payg-desc-ar">{item.ar}</p>
              <button className="payg-btn" onClick={() => window.location.href='/register'}>Buy Credits</button>
            </div>
          ))}
        </div>

        {/* SUBSCRIPTIONS */}
        <h2 className="section-title">Monthly Plans <span>اشتراكات شهرية</span></h2>
        <div className="plans">
          {[
            {
              name: 'Starter', nameAr: 'المبتدئ', price: '$15', period: 'per month / شهرياً',
              features: ['30 photos / month', 'AI descriptions (Arabic + English)', 'Basic mannequins', 'Email support'],
              btn: 'Start Now', featured: false,
            },
            {
              name: 'Pro', nameAr: 'الاحترافي', price: '$39', period: 'per month / شهرياً',
              features: ['150 photos / month', '5 videos / month', 'AI descriptions', 'Hijab mannequins', 'Gulf backgrounds', 'Priority support'],
              btn: 'Start Now', featured: true,
            },
            {
              name: 'Business', nameAr: 'الأعمال', price: '$69', period: 'per month / شهرياً',
              features: ['300 photos / month', '10 videos / month', 'AI descriptions', 'All mannequins', 'Custom backgrounds', 'Dedicated support'],
              btn: 'Start Now', featured: false,
            },
          ].map((p, i) => (
            <div key={i} className={`plan ${p.featured ? 'plan-featured' : ''}`}>
              {p.featured && <span className="plan-badge">Most Popular</span>}
              <p className="plan-name">{p.name}</p>
              <span className="plan-name-ar">{p.nameAr}</span>
              <span className="plan-price">{p.price}</span>
              <span className="plan-period">{p.period}</span>
              <ul className="plan-feats">
                {p.features.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
              <button className="plan-btn" onClick={() => window.location.href='/register'}>{p.btn}</button>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="faq">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          {[
            { q: 'هل يمكنني تجربة Vtry مجاناً؟', a: 'نعم! عند التسجيل تحصل على 3 تجارب مجانية بدون بطاقة ائتمان.' },
            { q: 'ما الفرق بين الصور والفيديوهات؟', a: 'الصور للمنتجات على المتجر، والفيديوهات للإعلانات على تيك توك ويوتيوب وانستقرام.' },
            { q: 'هل تدعمون العبايات والملابس المحتشمة؟', a: 'نعم! نوفر عارضات محجبات بأحجام مختلفة — ميزة حصرية لا تجدها في أي موقع آخر.' },
            { q: 'كيف يتم الدفع؟', a: 'قريباً ندعم بطاقات Visa وMastercard وتاببي وسداد. حالياً التواصل مباشرة عبر الإيميل.' },
          ].map((item, i) => (
            <div key={i} className="faq-item">
              <p className="faq-q">{item.q}</p>
              <p className="faq-a">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}