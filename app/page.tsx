'use client';

import { useState, useEffect } from 'react';

export default function LandingPage() {
  const [currentImg, setCurrentImg] = useState(0);

  const mannequinImgs = [
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&h=600&fit=crop&crop=center',
  ];

  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImg(prev => (prev + 1) % mannequinImgs.length);
        setFade(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const [activeTab, setActiveTab] = useState('Mannequin');
  const [selectedMannequin, setSelectedMannequin] = useState(0);
  const [selectedBg, setSelectedBg] = useState(0);

  const mannequins = ['👗', '🧍', '🧍‍♀️', '✨'];
  const backgrounds = ['#f5f5f3', '#1a1a1a', '#e8d5c4', '#c8dce8', '#d4e8c8'];
  const bgNames = ['أبيض', 'أسود', 'بيج', 'أزرق فاتح', 'أخضر فاتح'];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500&family=Noto+Kufi+Arabic:wght@300;400;600&display=swap');
        :root {
          --black: #0a0a0a; --white: #ffffff; --off-white: #fafaf8;
          --gray-100: #f4f4f2; --gray-200: #e8e8e4; --gray-400: #9a9a94;
          --gray-600: #5a5a56; --gray-700: #3a3a38;
          --accent: #b8952a; --accent-light: #f5edd6;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: var(--white); color: var(--black); font-family: 'DM Sans', sans-serif; overflow-x: hidden; }
        .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between; padding: 22px 60px; background: rgba(255,255,255,0.92); backdrop-filter: blur(16px); border-bottom: 1px solid var(--gray-200); }
        .logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .logo-mark { width: 36px; height: 36px; border: 1.5px solid var(--black); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', serif; font-size: 17px; font-weight: 700; color: var(--black); position: relative; }
        .logo-dot { position: absolute; width: 7px; height: 7px; background: var(--accent); border-radius: 50%; bottom: 0; right: 0; border: 1.5px solid var(--white); }
        .logo-text { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700; letter-spacing: 3px; color: var(--black); }
        .nav-links { display: flex; gap: 36px; list-style: none; }
        .nav-links a { font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--gray-600); text-decoration: none; }
        .nav-cta { background: var(--black); color: var(--white); padding: 10px 26px; border: none; font-size: 12px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; cursor: pointer; }
        .nav-cta:hover { background: var(--accent); }
        .hero { min-height: 100vh; display: flex; align-items: center; padding: 120px 60px 80px; background: var(--white); position: relative; overflow: hidden; }
        .hero-content { position: relative; z-index: 2; max-width: 540px; }
        .hero-tag { display: inline-flex; align-items: center; gap: 8px; border: 1px solid rgba(184,149,42,0.4); background: var(--accent-light); padding: 6px 16px; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--accent); margin-bottom: 36px; }
        .hero-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .hero-title { font-family: 'Playfair Display', serif; font-size: 64px; font-weight: 700; line-height: 1.05; margin-bottom: 16px; color: var(--black); }
        .hero-title em { color: var(--accent); font-style: italic; }
        .hero-ar { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 20px; font-weight: 300; color: var(--gray-600); line-height: 1.7; margin-bottom: 8px; direction: rtl; }
        .hero-en { font-size: 14px; color: var(--gray-400); margin-bottom: 48px; }
        .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
        .btn-primary { background: var(--black); color: var(--white); padding: 15px 40px; border: none; font-size: 13px; font-weight: 500; cursor: pointer; }
        .btn-primary:hover { background: var(--accent); }
        .btn-outline { background: transparent; color: var(--black); padding: 14px 36px; border: 1px solid var(--gray-200); font-size: 13px; cursor: pointer; }
        .btn-outline:hover { border-color: var(--black); }
        .stats-bar { border-top: 1px solid var(--gray-200); border-bottom: 1px solid var(--gray-200); padding: 36px 60px; display: flex; background: var(--off-white); }
        .stat-item { flex: 1; text-align: center; padding: 0 32px; border-left: 1px solid var(--gray-200); }
        .stat-item:last-child { border-right: 1px solid var(--gray-200); }
        .stat-num { font-family: 'Playfair Display', serif; font-size: 38px; font-weight: 700; color: var(--black); display: block; margin-bottom: 4px; }
        .stat-num em { color: var(--accent); font-style: normal; }
        .stat-label { font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--gray-400); }
        .section { padding: 96px 60px; }
        .section-tag { font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: var(--accent); margin-bottom: 16px; }
        .section-title { font-family: 'Playfair Display', serif; font-size: 44px; font-weight: 700; color: var(--black); }
        .section-subtitle { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 20px; font-weight: 300; color: var(--gray-400); margin-top: 8px; direction: rtl; }
        .steps { display: grid; grid-template-columns: repeat(4,1fr); gap: 1px; background: var(--gray-200); margin-top: 56px; border: 1px solid var(--gray-200); }
        .step { padding: 40px 32px; background: var(--white); position: relative; }
        .step-num { font-family: 'Playfair Display', serif; font-size: 56px; font-weight: 700; color: var(--gray-100); position: absolute; top: 16px; right: 20px; }
        .step-line { width: 32px; height: 2px; background: var(--accent); margin-bottom: 20px; }
        .step h3 { font-size: 16px; font-weight: 500; margin-bottom: 6px; color: var(--black); }
        .step-ar { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 13px; color: var(--accent); margin-bottom: 10px; direction: rtl; display: block; }
        .step p { font-size: 13px; color: var(--gray-600); line-height: 1.7; }
        .features-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; background: var(--gray-200); margin-top: 56px; border: 1px solid var(--gray-200); }
        .feat { padding: 40px 32px; background: var(--white); }
        .feat:hover { background: var(--off-white); }
        .feat-icon { width: 40px; height: 40px; border: 1px solid var(--gray-200); display: flex; align-items: center; justify-content: center; font-size: 18px; margin-bottom: 20px; }
        .feat h3 { font-size: 16px; font-weight: 500; margin-bottom: 6px; color: var(--black); }
        .feat .ar { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 12px; color: var(--accent); margin-bottom: 10px; direction: rtl; display: block; }
        .feat p { font-size: 13px; color: var(--gray-600); line-height: 1.7; }
        .plans { display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; background: var(--gray-200); margin-top: 56px; border: 1px solid var(--gray-200); }
        .plan { padding: 44px 36px; background: var(--white); }
        .plan-featured { background: var(--black) !important; }
        .plan-badge { font-size: 9px; letter-spacing: 2px; text-transform: uppercase; background: var(--accent); color: var(--white); padding: 4px 12px; display: inline-block; margin-bottom: 20px; }
        .plan-name { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--gray-400); margin-bottom: 4px; }
        .plan-name-ar { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 16px; font-weight: 600; color: var(--black); margin-bottom: 28px; direction: rtl; display: block; }
        .plan-featured .plan-name { color: rgba(255,255,255,0.5); }
        .plan-featured .plan-name-ar { color: var(--white); }
        .plan-price { font-family: 'Playfair Display', serif; font-size: 48px; font-weight: 700; color: var(--black); line-height: 1; margin-bottom: 4px; display: block; }
        .plan-featured .plan-price { color: var(--white); }
        .plan-price span { font-size: 14px; color: var(--gray-400); }
        .plan-period { font-size: 12px; color: var(--gray-400); margin-bottom: 32px; display: block; }
        .plan-feats { list-style: none; margin-bottom: 36px; }
        .plan-feats li { font-size: 13px; color: var(--gray-600); padding: 9px 0; border-bottom: 1px solid var(--gray-200); display: flex; align-items: center; gap: 8px; }
        .plan-featured .plan-feats li { color: rgba(255,255,255,0.7); border-bottom-color: rgba(255,255,255,0.1); }
        .plan-feats li::before { content: '—'; color: var(--accent); }
        .plan-btn { width: 100%; padding: 14px; background: var(--black); color: var(--white); border: none; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; cursor: pointer; }
        .plan-btn:hover { background: var(--accent); }
        .plan-featured .plan-btn { background: var(--accent); }
        .cta-section { padding: 100px 60px; text-align: center; background: var(--black); }
        .cta-section h2 { font-family: 'Playfair Display', serif; font-size: 52px; font-weight: 700; color: var(--white); margin-bottom: 12px; }
        .cta-ar { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 20px; color: rgba(255,255,255,0.4); display: block; margin-bottom: 40px; }
        .cta-btns { display: flex; gap: 14px; justify-content: center; }
        .cta-btn-primary { background: var(--white); color: var(--black); padding: 16px 48px; border: none; font-size: 13px; cursor: pointer; }
        .cta-btn-primary:hover { background: var(--accent); color: var(--white); }
        .cta-btn-outline { background: transparent; color: var(--white); padding: 15px 40px; border: 1px solid rgba(255,255,255,0.2); font-size: 13px; cursor: pointer; }
        footer { padding: 32px 60px; background: var(--white); border-top: 1px solid var(--gray-200); display: flex; align-items: center; justify-content: space-between; }
        .footer-logo { font-family: 'Playfair Display', serif; font-size: 18px; letter-spacing: 3px; color: var(--black); font-weight: 700; }
        .footer-copy { font-size: 11px; color: var(--gray-400); }
        .mannequin-card { position: absolute; right: 60px; top: 50%; transform: translateY(-50%); width: 320px; height: 480px; overflow: hidden; border: 1px solid var(--gray-200); box-shadow: 0 40px 80px rgba(0,0,0,0.08); z-index: 2; }
        .mannequin-img { width: 100%; height: 100%; object-fit: cover; transition: opacity 0.5s ease; }
        .mannequin-badge { position: absolute; bottom: 0; left: 0; right: 0; background: rgba(255,255,255,0.95); border-top: 1px solid var(--gray-200); padding: 12px 16px; display: flex; align-items: center; gap: 8px; }
      `}</style>

      <nav className="nav">
        <a href="#" className="logo">
          <div className="logo-mark">V<span className="logo-dot"></span></div>
          <span className="logo-text">VTRY</span>
        </a>
        <ul className="nav-links">
          <li><a href="#how">How it Works</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>
        <button className="nav-cta" onClick={() => window.location.href='/register'}>Start Free Trial</button>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-tag"><span className="hero-dot"></span>AI Virtual Try-On Platform</div>
          <h1 className="hero-title">Dress Your<br /><em>Store</em> Smarter</h1>
          <p className="hero-ar">حوّل ملابسك لصور وفيديوهات احترافية — جاهزة للنشر على تيك توك ويوتيوب وانستقرام</p>
          <p className="hero-en">Turn your fashion into pro photos & videos — ready for TikTok, YouTube & Instagram</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => window.location.href='/register'}>ابدأ مجاناً — Start Free</button>
            <button className="btn-outline">Watch Demo →</button>
          </div>
        </div>

        {/* MANNEQUIN CARD */}
        <div className="mannequin-card">
          <img
            src={mannequinImgs[currentImg]}
            alt="AI Fashion Model"
            className="mannequin-img"
            style={{opacity: fade ? 1 : 0}}
          />
          <div className="mannequin-badge">
            <div className="hero-dot"></div>
            <div>
              <strong style={{fontSize:'12px',display:'block',color:'#0a0a0a'}}>AI Virtual Try-On</strong>
              <span style={{fontSize:'11px',color:'#9a9a94'}}>يتغير كل 3 ثوانٍ</span>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-bar">
        {[{num:'3',unit:'s',label:'Try-On Speed'},{num:'40',unit:'%',label:'Less Returns'},{num:'2',unit:'x',label:'More Conversions'},{num:'500',unit:'+',label:'متجر نشط'}].map((s,i)=>(
          <div key={i} className="stat-item">
            <span className="stat-num">{s.num}<em>{s.unit}</em></span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* DEMO SECTION */}
      <section className="section" style={{background:'#ffffff'}} id="demo">
        <p className="section-tag">Live Demo — تجربة مباشرة</p>
        <h2 className="section-title">See the <em style={{color:'#b8952a',fontStyle:'italic'}}>Difference</em> Yourself</h2>
        <p className="section-subtitle">اسحب لترى الفرق — ملبس عادي إلى صورة احترافية في ثوانٍ</p>
        <div style={{textAlign:'center',padding:'40px',background:'#fafaf8',border:'1px solid #e8e8e4',marginTop:'40px'}}>
          <p style={{fontFamily:"'Noto Kufi Arabic',sans-serif",fontSize:'20px',fontWeight:300,color:'#0a0a0a',marginBottom:'6px',direction:'rtl'}}>جاهز تجرّب على منتجاتك الحقيقية؟</p>
          <p style={{fontSize:'13px',color:'#9a9a94',marginBottom:'28px'}}>3 تجارب مجانية — لا يلزم بطاقة ائتمان</p>
          <div style={{display:'flex',gap:'12px',justifyContent:'center',flexWrap:'wrap'}}>
            <button className="btn-primary" onClick={() => window.location.href='/register'}>ابدأ مجاناً — Start Free</button>
            <button className="btn-outline">شاهد المزيد</button>
          </div>
        </div>
      </section>

      <section className="section" style={{background:'var(--off-white)'}} id="how">
        <p className="section-tag">How It Works — كيف يعمل</p>
        <h2 className="section-title">Four Steps to Studio Quality</h2>
        <p className="section-subtitle">أربع خطوات للحصول على صور احترافية</p>
        <div className="steps">
          {[
            {num:'01',title:'Upload Garment',ar:'ارفع صورة الملبس',desc:'Upload any clothing photo — AI extracts the garment automatically.'},
            {num:'02',title:'Choose Mannequin',ar:'اختر المانيكان',desc:'Pick from preset models or generate a custom AI mannequin.'},
            {num:'03',title:'Set Background',ar:'اختر الخلفية',desc:'Studio, street, interior, or nature — any setting you want.'},
            {num:'04',title:'Publish & Sell',ar:'انشر وبيع',desc:'Download professional photos + AI description. Ready.'},
          ].map((s,i)=>(
            <div key={i} className="step">
              <span className="step-num">{s.num}</span>
              <div className="step-line"></div>
              <h3>{s.title}</h3>
              <span className="step-ar">{s.ar}</span>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="features">
        <p className="section-tag">Features — المميزات</p>
        <h2 className="section-title">Everything in One Platform</h2>
        <p className="section-subtitle">كل ما تحتاجه في مكان واحد</p>
        <div className="features-grid">
          {[
            {icon:'🤖',title:'AI Virtual Try-On',ar:'تجربة افتراضية',desc:'Powered by Segmind IDM-VTON.'},
            {icon:'🧍',title:'Virtual Mannequins',ar:'مانيكانات افتراضية',desc:'Preset or AI-generated mannequins.'},
            {icon:'🖼️',title:'Smart Backgrounds',ar:'خلفيات ذكية',desc:'Studio, outdoor, or AI backgrounds.'},
            {icon:'✍️',title:'AI Descriptions',ar:'أوصاف بالعربي والإنجليزي',desc:'Gemini AI writes product descriptions.'},
            {icon:'📊',title:'Merchant Dashboard',ar:'لوحة تحكم التاجر',desc:'Manage products and analytics.'},
            {icon:'🔗',title:'Salla & Zid Ready',ar:'تكامل مع سلة وزد',desc:'Connect to your store in minutes.'},
          ].map((f,i)=>(
            <div key={i} className="feat">
              <div className="feat-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <span className="ar">{f.ar}</span>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{background:'var(--off-white)'}} id="pricing">
        <p className="section-tag">Pricing — الأسعار</p>
        <h2 className="section-title">Simple Pricing</h2>
        <p className="section-subtitle">أسعار بسيطة وشفافة</p>
        <div className="plans">
          {[
            {name:'Starter',nameAr:'المبتدئ',price:'Free',period:'للبدء بدون تكلفة',features:['3 try-ons free','AI descriptions','1 store','Basic support'],btn:'ابدأ مجاناً',featured:false},
            {name:'Pro',nameAr:'الاحترافي',price:'$39',period:'per month',features:['200 photos/month','5 videos/month','AI descriptions','Analytics dashboard','Priority support'],btn:'Start Now',featured:true},
            {name:'Pay as you go',nameAr:'ادفع حسب الاستخدام',price:'$5',period:'per 10 photos',features:['No subscription','10 photos = $5','Video = $3 each','AI descriptions included'],btn:'Buy Credits',featured:false},
          ].map((p,i)=>(
            <div key={i} className={`plan${p.featured?' plan-featured':''}`}>
              {p.featured&&<span className="plan-badge">Most Popular</span>}
              <p className="plan-name">{p.name}</p>
              <span className="plan-name-ar">{p.nameAr}</span>
              <span className="plan-price">{p.price}</span>
              <span className="plan-period">{p.period}</span>
              <ul className="plan-feats">{p.features.map((f,j)=><li key={j}>{f}</li>)}</ul>
              <button className="plan-btn" onClick={() => window.location.href='/register'}>{p.btn}</button>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>Start Your Free Trial</h2>
        <span className="cta-ar">ابدأ تجربتك المجانية — لا يلزم بطاقة ائتمان</span>
        <div className="cta-btns">
          <button className="cta-btn-primary" onClick={() => window.location.href='/register'}>ابدأ مجاناً</button>
          <button className="cta-btn-outline">Book a Demo</button>
        </div>
      </section>

      <footer>
        <span className="footer-logo">VTRY</span>
        <span className="footer-copy">© 2025 Vtry. All rights reserved</span>
        <span className="footer-copy">جميع الحقوق محفوظة</span>
      </footer>
    </>
  );
}